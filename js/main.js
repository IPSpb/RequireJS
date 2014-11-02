var MyMath = (function() {

    //Здесь объвляются частные переменные и функциии

    return {
      add : function(a, b) {
          return a+b;
      }
    };
})();
console.log(MyMath.add(1, 2));