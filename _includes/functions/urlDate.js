const { format, parseISO } = require('date-fns');

module.exports = function (dateObject) {
    let d;
    if (typeof dateObject === "string") {
        d = parseISO(dateObject);
    }
    else {
        d = dateObject;
    }
    
    return format(d, "yyyyMMddHHmmss");
};