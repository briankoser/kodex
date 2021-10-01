module.exports = function (rating) {
    const star = '★';

    if (typeof(rating) === 'string' || rating < 0 || rating > 10) {
        return rating;
    }
    
    if (rating === 0) {
        return '0';
    }

    let starNumber = rating / 2;
    let starFloor = Math.floor(starNumber);

    return `<span class="stars">${''.padStart(starFloor, star)}${starNumber === starFloor ? '' : '½'}</span>`;
}