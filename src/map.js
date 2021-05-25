const head = require('./head');
const tail = require('./tail');

const getMapped = (list, functionCall, mappedResult = []) => {
    if(list.length === 0)
        return mappedResult;
    const element = head(list);
    const getMappedElement = functionCall(element);
    mappedResult.push(getMappedElement);
	return getMapped(tail(list), functionCall, mappedResult);
};

const map = (list, functionCall) => {
    const result = getMapped(list, functionCall, []);
    return result;
}
module.exports = map;