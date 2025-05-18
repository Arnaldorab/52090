grammar Calculator;

//Gramatica
programa: instruccion*
;

instruccion: bucle 
    | salida 
;

bucle: 'mientras' condicion '{' instruccion* '}' 
;

salida: 'imprimir' '(' cadena ')' ';' 
;

condicion: 'verdadero' 
    | 'falso' 
;

cadena: '"' caracter* '"' 
;

caracter: letra 
    | digito
    | ' '
    | simbolo 
;

letra: ID 
;
digito: INT 
;
simbolo: '.' | ',' | '!' | '?' | ':' | ';' 
;

//Lexemas
MUL : '*';
DIV : '/';
ADD : '+';
SUB : '-';
EQ: '=';
ID : [a-zA-Z]+;
INT : [0-9];
LPAREN : '(';
RPAREN : ')';
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;