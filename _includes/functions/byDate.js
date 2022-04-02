const { format, parse } = require('date-fns');

module.exports = function (collection, dateString, dateFormat) {
    let date = parse(dateString, dateFormat, new Date());
    let formattedDate = format(date, dateFormat);
    return collection.filter(c => format(c.date, dateFormat) === formattedDate);
};