console.time('loop');

function foo() {
    var a = 3;
    console.log( this.a, ' cambio' );
}

var a = 2;

(function(){
    let a = 8;    
    foo(); // 2
})();

console.timeEnd('loop');