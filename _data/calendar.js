// Thanksgiving, Easter modified from: https://github.com/jonstuebe/date-fns-holiday-us

const {
    getDay,
    setDate,
    addDays,
    addWeeks
} = require("date-fns");



module.exports = function () {
    let getFirstOccurence = function (date, dayOfWeekIndex) {
        return getNextOccurence(setDate(date, 1), dayOfWeekIndex);
    };

    let getNextOccurence = function(date, dayOfWeekIndex) {
        if (getDay(date) === dayOfWeekIndex) {
        return date;
        }
    
        if (getDay(date) > dayOfWeekIndex) {
        date = addDays(date, 7 - getDay(date) + dayOfWeekIndex);
        } else {
        date = addDays(date, dayOfWeekIndex - getDay(date));
        }
        return date;
    };

    let getEaster = function (year) {
        if (year < 325) {
          throw new RangeError("Cannot calculate Easter dates before 325 AD.");
        }
      
        function mod(a, b) {
          return a % b;
        }
      
        function div(a, b) {
          const q = a / b;
          if (q < 0) {
            throw new Error("Unexpected negative q");
          }
          return Math.floor(q);
        }
      
        const y = year,
          skipMarchDays = 21,
          a = mod(y, 19),
          b = div(y, 100),
          c = mod(y, 100),
          d = div(b, 4),
          e = mod(b, 4),
          f = div(b + 8, 25),
          g = div(b - f + 1, 3),
          h = mod(19 * a + b - d - g + 15, 30),
          i = div(c, 4),
          k = mod(c, 4),
          l = mod(32 + 2 * e + 2 * i - h - k, 7),
          m = div(a + 11 * h + 22 * l, 451),
          t = h + l - 7 * m + skipMarchDays,
          n = div(t, 31) + 3,
          p = mod(t, 31);
      
        return new Date(year, n - 1, p + 1);
    }

    let getThanksgiving = function (year) {
        return addWeeks(getFirstOccurence(new Date(year, 10), 4), 3);
    }



    let year = new Date().getFullYear();
    let holidays = [
        {
            name: "New Year's Day",
            category: 'american',
            month: 1,
            day: 1
        },
        {
            name: "Birthday of Martin Luther King Jr.",
            category: 'american',
            month: 1,
            day: 15
        },
        {
            name: "Washington's Birthday",
            category: 'american',
            month: 2,
            day: 22
        },
        {
            name: "May Day",
            category: 'american',
            month: 5,
            day: 1
        },
        {
            name: "Juneteenth",
            category: 'american',
            month: 6,
            day: 19
        },
        {
            name: "Independence Day",
            category: 'american',
            month: 7,
            day: 4
        },
        {
            name: "Patriot Day",
            category: 'american',
            month: 9,
            day: 11
        },
        {
            name: "Columbus Day",
            category: 'american',
            month: 10,
            day: 12
        },
        {
            name: "Veteran's Day",
            category: 'american',
            month: 11,
            day: 11
        },
        {
            name: "Battle of Vienna",
            category: 'history',
            month: 9,
            day: 12,
            traditions: [
                "Listen to Sabaton's Winged Hussars"
            ],
            comments: "https://www.sabaton.net/historical-facts/battle-of-vienna/"
        },
        {
            name: "Thanksgiving",
            category: 'american',
            get calculation() {
                return getThanksgiving(year);
            }
        },
        {
            name: "New Year's Eve",
            category: 'american',
            month: 12,
            day: 31
        },
        {
            name: "Eighth Day of Christmas",
            category: 'christian',
            month: 1,
            day: 1
        },
        {
            name: "Ninth Day of Christmas",
            category: 'christian',
            month: 1,
            day: 2
        },
        {
            name: "Tenth Day of Christmas",
            category: 'christian',
            month: 1,
            day: 3
        },
        {
            name: "Eleventh Day of Christmas",
            category: 'christian',
            month: 1,
            day: 4
        },
        {
            name: "Twelfth Night",
            category: 'christian',
            month: 1,
            day: 5
        },
        {
            name: "Epiphany",
            category: 'christian',
            month: 1,
            day: 6,
            traditions: [
                "King Cake"
            ],
            comments: "King Cake recipe in Hallelujah"
        },
        {
            name: "Candlemas",
            category: 'christian',
            month: 2,
            day: 2,
            traditions: [
                "Watch Groundhog Day"
            ]
        },
        {
            name: "Easter",
            category: 'christian',
            get calculation() {
                return getEaster(year);
            }
        },
        {
            name: "Roodmas",
            category: 'christian',
            month: 9,
            day: 14,
            traditions: [
                "Read \"Of the Invention of the Holy Cross\" from The Golden Legend",
                "Read The Dream of the Rood"
            ],
            comments: "Also called Holy Cross Day"
        },
        {
            name: "Feast of St. Eustace",
            category: 'christian',
            month: 9,
            day: 20,
            traditions: [
                "Read St. Eustace's story",
                "Drink Jägermeister"
            ]
        },
        {
            name: "Michaelmas",
            category: 'christian',
            month: 9,
            day: 29
        },
        {
            name: "All Hallow's Eve",
            category: 'christian',
            month: 10,
            day: 31,
            traditions: [
                "Trick or treat",
                "Write a scary story to read with the lights off"
            ]
        },
        {
            name: "All Saint's Day",
            category: 'christian',
            month: 11,
            day: 1,
            traditions: [
                "Read a new saint story"
            ]
        },
        {
            name: "All Souls' Day",
            category: 'christian',
            month: 11,
            day: 2
        },
        {
            name: "Martinmas",
            category: 'christian',
            month: 11,
            day: 11,
            traditions: [
                "Read St. Martin's story"
            ]
        },
        {
            name: "Christmas Eve",
            category: 'christian',
            month: 12,
            day: 24,
            traditions: [
                "Candlelight church service"
            ]
        },
        {
            name: "Christmas",
            category: 'christian',
            month: 12,
            day: 25,
            traditions: [
                "Read the Christmas story"
            ]
        },
        {
            name: "Second Day of Christmas",
            category: 'christian',
            month: 12,
            day: 26
        },
        {
            name: "Third Day of Christmas",
            category: 'christian',
            month: 12,
            day: 27
        },
        {
            name: "Fourth Day of Christmas",
            category: 'christian',
            month: 12,
            day: 28
        },
        {
            name: "Fifth Day of Christmas",
            category: 'christian',
            month: 12,
            day: 29
        },
        {
            name: "Sixth Day of Christmas",
            category: 'christian',
            month: 12,
            day: 30
        },
        {
            name: "Seventh Day of Christmas",
            category: 'christian',
            month: 12,
            day: 31
        }
    ];
    let currentYear = holidays.map(h => Object.assign({}, h, {"date": h.calculation || new Date(year, h.month - 1, h.day)}));
    let today = currentYear.filter(h => h.date.toDateString() == (new Date()).toDateString());



    return {
        currentYear,
        today
	};
}



    
//   - name: All Koser's Eve
//     slug: all-kosers-eve
//     category: family
//     month: 6
//     firstDayOfMonth: Saturday
//   - name: Koserstag
//     slug: koserstag
//     category: family
//     month: 6
//     anchor: all-kosers-eve
//     daysFrom: 1
    
//   - name: Baptism of the Lord (Sunday after Epiphany)
//   - name: Transfiguration Sunday (6 weeks after Baptism of the Lord)
//   - name: Ash Wednesday
//   - name: Lazarus Saturday
//   - name: Palm Sunday
//   - name: Holy Monday
//   - name: Holy Tuesday
//   - name: Spy Wednesday
//   - name: Maundy Thursday
//   - name: Good Friday
//   - name: Holy Saturday
//   - name: Easter Sunday
//   - name: Ascension of the Lord
//   - name: Pentecost
//   - name: Trinity Sunday
//   - name: First Sunday of Advent (fourth Sunday before Christmas)
//   - name: Second Sunday of Advent (third Sunday before Christmas)
//   - name: Third Sunday of Advent (second Sunday before Christmas)
//   - name: Fourth Sunday of Advent (Sunday before Christmas)

// todo: check for traditions in:
//   # Revised Common Lectionary
//   # O Come, O Come Emmanuel
//   # Be Thou My Vision
//   # Book of Common Prayer?
//   # Cindy Rollins's Hallelujah
//   # Guite's sonnets
//   # Swait's thanksgiving poems
//   # Psalter
//   # Every Moment Holy
// todo: display season: Advent, Christmastide, Epiphanytide, Lent, Eastertide, Ordinary Time
// todo: use liturgical colors