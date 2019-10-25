var calculator = (function () {
    function add(num1, num2) {
        return num1 + num2;
    }
    function sub(num1, num2){
        return num2 - num1;
    }
    return {
        add,
        sub
    }
})();
module.exports = calculator;