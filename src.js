// Written by github.com/RusstyCrussty123
// Github version may be outdated.

const RUNIT = {
    array: [],
    functions: {},
    position: 0,
    delay: 0,
    loaded: false
};

RUNIT.isNumber = function(str){
    if (!isNan(parseInt(str))) {
        return parseInt(str);
    }else{
        return str;
    }
};

RUNIT.print = function(str){
    console.log("RUNIT", str);
};

RUNIT.identify = function(str){
    if (str) {
        let args = str.split(":");
    
        switch (args[0]) {
            case "int": return parseInt(args[1]);
            case "length": return RUNIT.array.length;
            case "position": return RUNIT.position;
            case "sprt": return Math.sqrt(args[1]);
            case "sin": return Math.sin(args[1]);
            case "math": return Math[args[1]](args[2]);
            default: return str;
        }
    }else{
        return str;
    }
};

RUNIT.compile = function(code){
    let lines = code.split("|");
    let print = RUNIT.print;

    for (let lineNum=0; lineNum<lines.length; lineNum++) {
        let line = lines[lineNum].split(" ");

        for (let i=0; i<line.length; i++) {
            setTimeout(()=>{
                let array = RUNIT.array;
                let position = RUNIT.position;
                let word = RUNIT.identify(line[i]);
                let next = RUNIT.identify(line[i+1]);
                let nextNum = parseInt(next);
    
                switch (word) {
                    case "MOVE":
                        RUNIT.position+=nextNum;
                        break;
                    case "PUSH":
                        RUNIT.array.push(nextNum);
                        break;
                    case "ADD":
                        RUNIT.array[RUNIT.position]+=nextNum;
                        break;
                    case "LOOP":
                        for (let v=0; v<nextNum; v++) RUNIT.compile(line.slice(i+1).join(" "));
                        break;
                    case "PRINT":
                        print(RUNIT.array[RUNIT.position]);
                        break;
                    case "CLEAR":
                        RUNIT.array=[];
                        RUNIT.position=0;
                        print("cleared");
                        break;
                    case "IF=":
                        let is = RUNIT.array[nextNum]==parseInt(RUNIT.array[line[i+2]]);
                        print(is.toString());
                        break;
                    case "DELAY":
                        RUNIT.delay=RUNIT.array[RUNIT.position];
                        break;
                    case "ID":
                        print(next);
                        break;
                    case "INFO":
                        print("RUNIT LANG. Seperate actions by spaces, seperate methods (identifiers by : colons)");
                        break;
                }
            },RUNIT.delay);
        }
    }
};


RUNIT.print("RUNIT.js successfully loaded! Start with running some code through compiler. (RUNIT.compiler(src))");
