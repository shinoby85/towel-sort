// You should implement your task here.

module.exports =function towelSort(matrix) {
    if(!Array.isArray(matrix)) return [];
    let flagRevers = false;
    return matrix.reduce((data, item) => {
        if (!flagRevers) {
            flagRevers = true;
            return data.concat(item);
        }
        flagRevers = false;
        return data.concat(item.reverse());

    }, [])

}

