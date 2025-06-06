// Generated from c:/Windows/System32/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,20,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,3,0,22,8,0,1,1,4,1,25,8,1,11,
1,12,1,26,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,3,3,36,8,3,1,4,1,4,1,4,1,4,1,5,
1,5,3,5,44,8,5,1,5,1,5,5,5,48,8,5,10,5,12,5,51,9,5,1,5,1,5,1,6,1,6,1,6,1,
6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,66,8,7,3,7,68,8,7,1,7,3,7,71,8,7,1,8,1,
8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,78,0,18,1,0,0,0,2,24,1,0,0,0,4,28,
1,0,0,0,6,35,1,0,0,0,8,37,1,0,0,0,10,41,1,0,0,0,12,54,1,0,0,0,14,70,1,0,
0,0,16,72,1,0,0,0,18,21,3,2,1,0,19,20,5,1,0,0,20,22,3,0,0,0,21,19,1,0,0,
0,21,22,1,0,0,0,22,1,1,0,0,0,23,25,3,4,2,0,24,23,1,0,0,0,25,26,1,0,0,0,26,
24,1,0,0,0,26,27,1,0,0,0,27,3,1,0,0,0,28,30,3,6,3,0,29,31,3,14,7,0,30,29,
1,0,0,0,30,31,1,0,0,0,31,5,1,0,0,0,32,36,3,16,8,0,33,36,3,8,4,0,34,36,3,
10,5,0,35,32,1,0,0,0,35,33,1,0,0,0,35,34,1,0,0,0,36,7,1,0,0,0,37,38,5,17,
0,0,38,39,3,0,0,0,39,40,5,18,0,0,40,9,1,0,0,0,41,43,5,2,0,0,42,44,5,3,0,
0,43,42,1,0,0,0,43,44,1,0,0,0,44,49,1,0,0,0,45,48,3,12,6,0,46,48,3,16,8,
0,47,45,1,0,0,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,
50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,4,0,0,53,11,1,0,0,0,54,55,3,16,8,0,55,
56,5,13,0,0,56,57,3,16,8,0,57,13,1,0,0,0,58,71,5,10,0,0,59,71,5,12,0,0,60,
71,5,5,0,0,61,62,5,6,0,0,62,67,5,16,0,0,63,65,5,7,0,0,64,66,5,16,0,0,65,
64,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,63,1,0,0,0,67,68,1,0,0,0,68,69,
1,0,0,0,69,71,5,8,0,0,70,58,1,0,0,0,70,59,1,0,0,0,70,60,1,0,0,0,70,61,1,
0,0,0,71,15,1,0,0,0,72,73,5,9,0,0,73,17,1,0,0,0,10,21,26,30,35,43,47,49,
65,67,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'|'", "'['", "'^'", "']'", "'?'", "'{'", 
                            "','", "'}'", null, "'*'", "'/'", "'+'", "'-'", 
                            "'='", null, null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "CHAR", "MUL", "DIV", "ADD", "SUB", "EQ", 
                             "ID", "INT", "LPAREN", "RPAREN", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "charClass", 
                         "range", "quantifier", "char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.term();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 19;
	            this.match(CalculatorParser.T__0);
	            this.state = 20;
	            this.regex();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 23;
	            this.factor();
	            this.state = 26; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131588) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.base();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 5216) !== 0)) {
	            this.state = 29;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_base);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.char_();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.group();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.charClass();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 38;
	        this.regex();
	        this.state = 39;
	        this.match(CalculatorParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charClass() {
	    let localctx = new CharClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_charClass);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(CalculatorParser.T__1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 42;
	            this.match(CalculatorParser.T__2);
	        }

	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 47;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 45;
	                this.range();
	                break;

	            case 2:
	                this.state = 46;
	                this.char_();
	                break;

	            }
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(CalculatorParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.char_();
	        this.state = 55;
	        this.match(CalculatorParser.SUB);
	        this.state = 56;
	        this.char_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(CalculatorParser.MUL);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(CalculatorParser.ADD);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.match(CalculatorParser.T__4);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.match(CalculatorParser.T__5);
	            this.state = 62;
	            this.match(CalculatorParser.INT);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 63;
	                this.match(CalculatorParser.T__6);
	                this.state = 65;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===16) {
	                    this.state = 64;
	                    this.match(CalculatorParser.INT);
	                }

	            }

	            this.state = 69;
	            this.match(CalculatorParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	char_() {
	    let localctx = new CharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_char);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CalculatorParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.CHAR = 9;
CalculatorParser.MUL = 10;
CalculatorParser.DIV = 11;
CalculatorParser.ADD = 12;
CalculatorParser.SUB = 13;
CalculatorParser.EQ = 14;
CalculatorParser.ID = 15;
CalculatorParser.INT = 16;
CalculatorParser.LPAREN = 17;
CalculatorParser.RPAREN = 18;
CalculatorParser.NEWLINE = 19;
CalculatorParser.WS = 20;

CalculatorParser.RULE_regex = 0;
CalculatorParser.RULE_term = 1;
CalculatorParser.RULE_factor = 2;
CalculatorParser.RULE_base = 3;
CalculatorParser.RULE_group = 4;
CalculatorParser.RULE_charClass = 5;
CalculatorParser.RULE_range = 6;
CalculatorParser.RULE_quantifier = 7;
CalculatorParser.RULE_char = 8;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_regex;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_base;
    }

	char_() {
	    return this.getTypedRuleContext(CharContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	charClass() {
	    return this.getTypedRuleContext(CharClassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_group;
    }

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_charClass;
    }

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
	};

	char_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharContext);
	    } else {
	        return this.getTypedRuleContext(CharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCharClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCharClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCharClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_range;
    }

	char_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharContext);
	    } else {
	        return this.getTypedRuleContext(CharContext,i);
	    }
	};

	SUB() {
	    return this.getToken(CalculatorParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_quantifier;
    }

	MUL() {
	    return this.getToken(CalculatorParser.MUL, 0);
	};

	ADD() {
	    return this.getToken(CalculatorParser.ADD, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.INT);
	    } else {
	        return this.getToken(CalculatorParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_char;
    }

	CHAR() {
	    return this.getToken(CalculatorParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.RegexContext = RegexContext; 
CalculatorParser.TermContext = TermContext; 
CalculatorParser.FactorContext = FactorContext; 
CalculatorParser.BaseContext = BaseContext; 
CalculatorParser.GroupContext = GroupContext; 
CalculatorParser.CharClassContext = CharClassContext; 
CalculatorParser.RangeContext = RangeContext; 
CalculatorParser.QuantifierContext = QuantifierContext; 
CalculatorParser.CharContext = CharContext; 
