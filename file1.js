var name = "Jhon";
console.log("PLACE - A")

exports.getName = function() {
    return name;
}

exports.setName = function(string) {
    name = string;  // this is the global class variable
    this.name = "This never gets accessed..."
}

exports.calculateThis = function (x,y) {

}