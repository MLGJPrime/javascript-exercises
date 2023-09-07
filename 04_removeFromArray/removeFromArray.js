const removeFromArray = function(array, ...args) {
    const newArray = []
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray
};

console.log(removeFromArray([1, 3, 2, 3, 4, 3], 3, 7, "spam", 1))

// Do not edit below this line
module.exports = removeFromArray;
