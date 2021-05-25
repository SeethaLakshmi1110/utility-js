const head = require('./head');
const tail = require('./tail');

const getMin = (minValue, array) => {
    if(minValue === null)
        return null;
    if(array.length === 0)
        return minValue;
    minValue = minValue < head(array) ? minValue : head(array);
    return getMin(minValue, tail(array));
}

const min = (list) => {
    const minValue = head(list);
    const array = tail(list);
    return getMin(minValue, array);
}
module.exports = min;