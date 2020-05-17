
exports.chunk = ([...array], size = 1) => {

    const chunks = [];
    const length = array.length;
    const totalPossibleChunks = parseInt(length / size);

    if (totalPossibleChunks == 0) {
        chunks[0] = array;
        return chunks;
    }

    for (i = 0; i < totalPossibleChunks; i++) 
        chunks[i] = array.slice(i, chunks.length + size);

    if (!Number.isInteger(length / size)) 
        chunks[chunks.length] = array.splice(chunks.length * size);

    return chunks;

}
