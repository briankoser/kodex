const { format } = require('date-fns');
const slugify = require('slugify');

module.exports = function (day) {
    if (day.length > 0) {
        return day
            .map(d => `<a href="/calendar#${slugify(d.name, {lower: true})}">${d.name}</a>`)
            .join("<br>");
    }
    else {
        return format(new Date(), "MMMM do, yyyy");
    }    
};