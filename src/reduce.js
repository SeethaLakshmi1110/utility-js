const head = require('./head');
const tail = require('./tail');

const reduceElement = (list, functionCall, value) => {
    if(list.length === 0) {
        if(value)
            return value;
        return [];
    }  
    if (value === undefined)
        return reduceElement(tail(list), functionCall, head(array));
    const element = head(list);
    const result = functionCall(value, element);
    return reduceElement(tail(list), functionCall, result);
}

const reduce = (list, functionCall, value) => {
    return reduceElement(list, functionCall, value);
}
module.exports = reduce;