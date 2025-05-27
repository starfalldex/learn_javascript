// Immediately Invoked Function Expression (IIFE)

// syntax: (function define)(execution);
// executed immediately and isolate variables from the global scope pollution
// always use ';'

// named iife
(function color() {
  console.log("1: color shown");
})();

// Anonymous iife
((name) => { console.log(`2: ${name} connected`) })(`starfall`);

const hello = ((name) => (`3: hello color `))();
console.log(hello)