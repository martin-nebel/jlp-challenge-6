// myFilter :: [integer] -> boolean
// Array.prototype.myFilter = function (passedFunction) {
//     console.log("Entry: array=" + JSON.stringify(this));
//     if (typeof passedFunction !== 'function') return this;

//     console.log("Function length: " + passedFunction.length);

//     var filteredOutput = [];
//     for (let i = 0; i < this.length; i++) {
//         if (passedFunction(this[i])) filteredOutput.push(this[i]);
//     }
//     return filteredOutput;
// };

myFilter = (items, callback) => {
    if (typeof callback !== 'function') return items;
    if (!callback) return items;

    var filteredOutput = [];
    for (let i = 0; i < items.length; i++) {
        if (callback(items[i])) filteredOutput.push(items[i]);
    }
    return filteredOutput;
}

module.exports = myFilter;