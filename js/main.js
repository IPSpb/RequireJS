var MyMath = (function() {

    //С этим патерном вы можете использовать обычное описание функций:

    function add(a, b) {
        return a + b;
    }

    return {
      add : add
    };
})();
console.log(MyMath.add(1, 2));