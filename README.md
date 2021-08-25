# RUNIT_lang
Weird language written in js

```js
RUNIT.compile("Put your source code here")
//Example:
RUNIT.compile("PUSH 0 | LOOP 100 ADD 1 PRINT") // Returns numbers going to 101.

//Syntax:
// | - This seperates lines of code or also can be called threads.
// : - Seperates identifiers. Ex: int:10 -- tells compiler to parse this as an int otherwhise it will be in string form.
// More : examples: math:sqrt:144 -- returns the square root of 144 (12). math:mathfunction:args (anything inside the javascript math global)
// Please read source code for more context.
// Every action must be seperated by a space: Ex. MOVE 1 PUSH 10 MOVE 5
console.log("enjoy");
