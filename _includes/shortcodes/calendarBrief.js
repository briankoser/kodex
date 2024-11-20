const { format } = require('date-fns');
const slugify = require('slugify');

module.exports = function (calendar) {
    if ((calendar.today || []).length > 0) {
        return calendar.today
            .map(d => `<a href="/calendar#${slugify(d.name, {lower: true})}">${d.name}</a>`)
            .join("<br>");
    }
    else {
        return `${format(new Date(), "MMMM do, yyyy")}<br>
            Next holiday: <a href="/calendar#${slugify(calendar.nextHoliday.name, {lower: true})}">${calendar.nextHoliday.name}</a>`;
    }    
};