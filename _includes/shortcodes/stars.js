module.exports = function (rating) {
    if (typeof(rating) === 'string' || rating < 0 || rating > 10) {
        return rating;
    }
    
    if (rating === 0) {
        return '0';
    }

    if (rating % 2 === 0) {
        return ''.padStart(rating, '🟊'); // we're halving (10 -> 5 stars) because the character 🟊 is two bytes
    }
    else {
        return `${''.padStart(rating - 1, '🟊')}½`; // we're halving (10 -> 5 stars) because the character 🟊 is two bytes
    }

    return stars;
}