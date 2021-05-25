const tail = (list) => {
    if(list.length === 0)
        return null;
    return list.slice(1);
}
module.exports = tail;