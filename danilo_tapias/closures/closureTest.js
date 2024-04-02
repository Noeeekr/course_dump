// function has scope to declare it own
var scope = (function(){
    var variables = ["a","b","c"]

    function checkVariables() {
        console.log(variables);
        return this;
    }
    function addVariables(item) {
        variables.push(item);
        return this;
    }

    return {checkVariables,addVariables} 
})();

scope.checkVariables().addVariables("d").checkVariables();

// item argument will exist until the item is consumed and the function operation ends so it can be garbage collected;
scope.addVariables("e");

scope.checkVariables();