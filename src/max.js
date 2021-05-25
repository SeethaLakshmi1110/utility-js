const head = require('./head');
const tail = require('./tail');

const getMax = (maxValue, array) => {
    if(maxValue === null)
        return null;
    if(array.length === 0)
        return maxValue;
    maxValue = maxValue > head(array) ? maxValue : head(array);
    return getMax(maxValue, tail(array));
}

const max = (list) => {
    const maxValue = head(list);
    const array = tail(list);
    return getMax(maxValue, array);
}
module.exports = max;