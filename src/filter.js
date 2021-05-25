const head = require('./head');
const tail = require('./tail');

const filterInputElement = (list, result, functionCall) => {
    if(list.length === 0)
        return result;
    const element = head(list);
    const isValid = functionCall(element);
    if(isValid)
        result.push(element);
    return filterInputElement(tail(list), result, functionCall);
}

const filter = (list, functionCall) => {
    return filterInputElement(list, [], functionCall);
}
module.exports = filter;