%noassoc EQ GT LT NE GTEQ LTEQ

%start ast
%%

NEWLINES
    : NEWLINES NEWLINE
    | NEWLINE
    ;

ast
    : statements                        { return new yy.ast.YaksokRoot($statements) }
    | statements NEWLINES               { return new yy.ast.YaksokRoot($statements) }
    | NEWLINES statements               { return new yy.ast.YaksokRoot($statements) }
    | NEWLINES statements NEWLINES      { return new yy.ast.YaksokRoot($statements) }
    ;

statements
    : statements NEWLINES statement     { $1.push($3); $$ = $1 }
    | statement                         { $$ = new yy.ast.Statements(); $$.push($1) }
    ;

statement
    : assign_statement                  { $$ = $1 }
    | call                              { $$ = new yy.ast.Statement($1) }
    | if_statement                      { $$ = $1 }
    ;

assign_statement
    : IDENTIFIER ASSIGN call            { $$ = new yy.ast.AssignStatement(new yy.ast.Name($1), $3) }
    ;

call
    : expressions                       { $$ = yy.parseCall($1) }
    ;

block
    : NEWLINES INDENT statements DEDENT             { $$ = $statements }
    | NEWLINES INDENT statements NEWLINES DEDENT    { $$ = $statements }
    ;

if_statement
    : IF expression THEN block          { $$ = new yy.ast.If($expression, $block, null) }
    ;

expressions
    : expressions expression            { $1.push($2); $$ = $1 }
    | expression                        { $$ = new yy.ast.Expressions(); $$.push($1) }
    ;

expression
    : or_expression                     { $$ = $1 }
    ;

or_expression
    : or_expression OR and_expression   { $$ = new yy.Or($1, $3) }
    | and_expression                    { $$ = $1 }
    ;

and_expression
    : and_expression AND logical_expression     { $$ = new yy.And($1, $3) }
    | logical_expression                        { $$ = $1 }
    ;

logical_expression
    : additive_expression EQ additive_expression    { $$ = new yy.ast.Equal($1, $3) }
    | additive_expression NE additive_expression    { $$ = new yy.ast.NotEqual($1, $3) }
    | additive_expression GT additive_expression    { $$ = new yy.ast.GreaterThan($1, $3) }
    | additive_expression LT additive_expression    { $$ = new yy.ast.LessThan($1, $3) }
    | additive_expression GTEQ additive_expression  { $$ = new yy.ast.GreaterThanEqual($1, $3) }
    | additive_expression LTEQ additive_expression  { $$ = new yy.ast.LessThanEqual($1, $3) }
    | additive_expression                           { $$ = $1 }
    ;

additive_expression
    : additive_expression PLUS multiplicative_expression    { $$ = new yy.ast.Plus($1, $3) }
    | additive_expression MINUS multiplicative_expression   { $$ = new yy.ast.Minus($1, $3) }
    | multiplicative_expression                             { $$ = $1 }
    ;

multiplicative_expression
    : multiplicative_expression MULT primary_expression     { $$ = new yy.ast.Multiply($1, $3) }
    | multiplicative_expression DIV primary_expression      { $$ = new yy.ast.Divide($1, $3) }
    | multiplicative_expression MOD primary_expression      { $$ = new yy.ast.Modular($1, $3) }
    | primary_expression                                    { $$ = $1 }
    ;

primary_expression
    : IDENTIFIER                        { $$ = new yy.ast.Name($1) }
    | STRING                            { $$ = new yy.ast.String(yy.parseString($1)) }
    | TRUE                              { $$ = new yy.ast.Boolean(true) }
    | FALSE                             { $$ = new yy.ast.Boolean(false) }
    | NUMBER                            { $$ = $1 }
    | RANGE                             { $$ = $1 }
    | LIST                              { $$ = $1 }
    ;

NUMBER
    : INTEGER                           { $$ = new yy.ast.Integer(yy.parseInteger($1)) }
    | FLOAT                             { $$ = new yy.ast.Float(yy.parseFloat($1)) }
    ;

RANGE
    : additive_expression TILDE additive_expression     { $$ = new yy.ast.Range($1, $3) }
    ;

LIST
    : LSQUARE RSQUARE                   { $$ = new yy.ast.List() }
    | LSQUARE list_items RSQUARE        { $$ = $list_items }
    | LSQUARE list_items COMMA RSQUARE  { $$ = $list_items }
    ;

list_items
    : list_items COMMA expression       { $1.push($3); $$ = $1 }
    | expression                        { $$ = new yy.ast.List(); $$.push($1) }
    ;
