// Generated from c:/Windows/System32/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,20,95,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,3,8,61,8,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,4,14,
74,8,14,11,14,12,14,75,1,15,1,15,1,16,1,16,1,17,1,17,1,18,3,18,85,8,18,1,
18,1,18,1,19,4,19,90,8,19,11,19,12,19,91,1,19,1,19,0,0,20,1,1,3,2,5,3,7,
4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,
35,18,37,19,39,20,1,0,4,7,0,9,10,13,13,32,32,40,43,63,63,91,93,123,125,2,
0,65,90,97,122,1,0,48,57,2,0,9,9,32,32,98,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
0,0,0,1,41,1,0,0,0,3,43,1,0,0,0,5,45,1,0,0,0,7,47,1,0,0,0,9,49,1,0,0,0,11,
51,1,0,0,0,13,53,1,0,0,0,15,55,1,0,0,0,17,60,1,0,0,0,19,62,1,0,0,0,21,64,
1,0,0,0,23,66,1,0,0,0,25,68,1,0,0,0,27,70,1,0,0,0,29,73,1,0,0,0,31,77,1,
0,0,0,33,79,1,0,0,0,35,81,1,0,0,0,37,84,1,0,0,0,39,89,1,0,0,0,41,42,5,124,
0,0,42,2,1,0,0,0,43,44,5,91,0,0,44,4,1,0,0,0,45,46,5,94,0,0,46,6,1,0,0,0,
47,48,5,93,0,0,48,8,1,0,0,0,49,50,5,63,0,0,50,10,1,0,0,0,51,52,5,123,0,0,
52,12,1,0,0,0,53,54,5,44,0,0,54,14,1,0,0,0,55,56,5,125,0,0,56,16,1,0,0,0,
57,58,5,92,0,0,58,61,9,0,0,0,59,61,8,0,0,0,60,57,1,0,0,0,60,59,1,0,0,0,61,
18,1,0,0,0,62,63,5,42,0,0,63,20,1,0,0,0,64,65,5,47,0,0,65,22,1,0,0,0,66,
67,5,43,0,0,67,24,1,0,0,0,68,69,5,45,0,0,69,26,1,0,0,0,70,71,5,61,0,0,71,
28,1,0,0,0,72,74,7,1,0,0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,
1,0,0,0,76,30,1,0,0,0,77,78,7,2,0,0,78,32,1,0,0,0,79,80,5,40,0,0,80,34,1,
0,0,0,81,82,5,41,0,0,82,36,1,0,0,0,83,85,5,13,0,0,84,83,1,0,0,0,84,85,1,
0,0,0,85,86,1,0,0,0,86,87,5,10,0,0,87,38,1,0,0,0,88,90,7,3,0,0,89,88,1,0,
0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,6,19,0,
0,94,40,1,0,0,0,5,0,60,75,84,91,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'|'", "'['", "'^'", "']'", "'?'", "'{'", 
                         "','", "'}'", null, "'*'", "'/'", "'+'", "'-'", 
                         "'='", null, null, "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, "CHAR", "MUL", "DIV", "ADD", "SUB", "EQ", 
                          "ID", "INT", "LPAREN", "RPAREN", "NEWLINE", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "CHAR", "MUL", "DIV", "ADD", "SUB", "EQ", 
                      "ID", "INT", "LPAREN", "RPAREN", "NEWLINE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.T__0 = 1;
CalculatorLexer.T__1 = 2;
CalculatorLexer.T__2 = 3;
CalculatorLexer.T__3 = 4;
CalculatorLexer.T__4 = 5;
CalculatorLexer.T__5 = 6;
CalculatorLexer.T__6 = 7;
CalculatorLexer.T__7 = 8;
CalculatorLexer.CHAR = 9;
CalculatorLexer.MUL = 10;
CalculatorLexer.DIV = 11;
CalculatorLexer.ADD = 12;
CalculatorLexer.SUB = 13;
CalculatorLexer.EQ = 14;
CalculatorLexer.ID = 15;
CalculatorLexer.INT = 16;
CalculatorLexer.LPAREN = 17;
CalculatorLexer.RPAREN = 18;
CalculatorLexer.NEWLINE = 19;
CalculatorLexer.WS = 20;



