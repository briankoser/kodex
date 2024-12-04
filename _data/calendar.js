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

    let getDaysFromEaster = function (year, daysAfter) {
        let easter = getEaster(year);
        return addDays(easter, daysAfter);
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
            aka: ['Martin Luther King Jr. Day', 'MLK Day'],
            month: 1,
            day: 15
        },
        {
            name: "Washington's Birthday",
            category: 'american',
            aka: ["Presidents' Day"],
            month: 2,
            day: 22
        },
        {
            name: "May Day",
            category: 'world',
            month: 5,
            day: 1
        },
        {
            name: "Juneteenth",
            category: 'american',
            aka: ['Juneteenth National Independence Day'],
            month: 6,
            day: 19
        },
        {
            name: "Independence Day",
            category: 'american',
            aka: ['Fourth of July'],
            month: 7,
            day: 4
        },
        {
            name: "Patriot Day",
            category: 'american',
            aka: ['9/11'],
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
            aka: ['Armistice Day'],
            month: 11,
            day: 11
        },
        {
            name: "Battle of Vienna",
            category: 'world',
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
            aka: ["Old Year's Day"],
            month: 12,
            day: 31
        },
        {
            name: "Feast of the Circumcision",
            category: 'christian',
            aka: ['Octave', 'Eighth Day of Christmas'],
            month: 1,
            day: 1,
            traditions: [
                "Read Malcolm Guite's poem \"New Year's Day: Church bells\" (Sounding the Seasons p. 18)"
            ]
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
            aka: ['Twelfth Day of Christmas', 'Epiphany Eve'],
            month: 1,
            day: 5
        },
        {
            name: "Epiphany",
            category: 'christian',
            aka: ["Three Kings's Day"],
            month: 1,
            day: 6,
            traditions: [
                "King Cake",
                "Read Malcolm Guite's poem \"The magi\" (Sounding the Seasons p. 19)"
            ],
            comments: "King Cake recipe in Hallelujah"
        },
        {
            name: "Theophany",
            category: 'christian',
            aka: ['Feast of the Baptism of the Lord', 'Plough Sunday'],
            traditions: [
                "Read Malcolm Guite's poem \"The baptism of Christ\" (Sounding the Seasons p. 20)"
            ],
            get calculation() {
                return getNextOccurence(new Date(year, 0, 6), 0);
            }
        },
        {
            name: "Plough Monday",
            category: 'christian',
            traditions: [
                "Start School Term 2"
            ],
            get calculation() {
                return getNextOccurence(new Date(year, 0, 6), 1);
            }
        },
        {
            name: "Candlemas",
            category: 'christian',
            aka: ['Feast of the Presentation of Jesus Christ', 'Feast of the Purification of the Blessed Virgin Mary', 'Feast of the Holy Encounter'],
            month: 2,
            day: 2,
            traditions: [
                "Watch Groundhog Day",
                "Read Malcolm Guite's poem \"Candlemas\" (Sounding the Seasons p. 25)"
            ]
        },
        {
            name: "Feast of the Annunciation",
            category: 'christian',
            aka: ['Lady Day', 'Feast of the Incarnation', 'Conceptio Christi'],
            month: 3,
            day: 25,
            traditions: [
                "Read Malcolm Guite's poem \"The Annunciation\" (Sounding the Seasons p. 31)"
            ],
        },
        {
            name: "Transfiguration Sunday",
            category: 'christian',
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 0, 6), 0), 42);
            }
        },
        {
            name: "Septuagesima",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -63);
            }
        },
        {
            name: "Sexagesima",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -56);
            }
        },
        {
            name: "Shrove Saturday",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -50);
            }
        },
        {
            name: "Quinquagesima",
            category: 'christian',
            aka: ['Shrove Sunday'],
            get calculation() {
                return getDaysFromEaster(year, -49);
            }
        },
        {
            name: "Shrove Monday",
            category: 'christian',
            aka: ['Collopy Monday'],
            get calculation() {
                return getDaysFromEaster(year, -48);
            }
        },
        {
            name: "Shrove Tuesday",
            category: 'christian',
            aka: ['Mardis Gras', 'Pancake Day'],
            get calculation() {
                return getDaysFromEaster(year, -47);
            }
        },
        {
            name: "Ash Wednesday",
            category: 'christian',
            traditions: [
                "Read Malcolm Guite's poem \"Ash Wednesday\" (Sounding the Seasons p. 26)"
            ],
            get calculation() {
                return getDaysFromEaster(year, -46);
            }
        },
        {
            name: "Quadragesima Sunday",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -42);
            },
            comments: 'Wednesday, Friday, and Saturday are Ember Days'
        },
        {
            name: "Lazarus Saturday",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -8);
            }
        },
        {
            name: "Palm Sunday",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -7);
            }
        },
        {
            name: "Holy Monday",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, -6);
            }
        },
        {
            name: "Fig Tuesday",
            category: 'christian',
            aka: ["Holy Tuesday"],
            get calculation() {
                return getDaysFromEaster(year, -5);
            }
        },
        {
            name: "Spy Wednesday",
            category: 'christian',
            aka: ['Holy Wednesday', 'Good Wednesday'],
            get calculation() {
                return getDaysFromEaster(year, -4);
            }
        },
        {
            name: "Maundy Thursday",
            category: 'christian',
            aka: ['Holy Thursday'],
            get calculation() {
                return getDaysFromEaster(year, -3);
            }
        },
        {
            name: "Good Friday",
            category: 'christian',
            aka: ['Holy Friday', 'Black Friday'],
            get calculation() {
                return getDaysFromEaster(year, -2);
            }
        },
        {
            name: "Holy Saturday",
            category: 'christian',
            aka: ['Low Saturday', 'Great Sabbath', 'Black Saturday', 'Easter Eve'],
            get calculation() {
                return getDaysFromEaster(year, -1);
            }
        },
        {
            name: "Easter",
            category: 'christian',
            aka: ['Pascha', 'Resurrection Sunday'],
            get calculation() {
                return getEaster(year);
            }
        },
        {
            name: "Ascension Day",
            category: 'christian',
            aka: ['Feast of the Ascension'],
            get calculation() {
                return getDaysFromEaster(year, 40);
            }
        },
        {
            name: "Pentecost",
            category: 'christian',
            aka: ['Whitsun', 'Whitsunday'],
            get calculation() {
                return getDaysFromEaster(year, 49);
            },
            comments: 'Wednesday, Friday, and Saturday are Ember Days'
        },
        {
            name: "Saint George's Day",
            category: 'christian',
            month: 4,
            day: 23,
            traditions: [
                "Read \"St. George and the Dragon\""
            ],
            comments: "Also the death and estimated birth day of William Shakespeare"
        },
        {
            name: "Whit Monday",
            category: 'christian',
            aka: ['Pentecost Monday', 'Monday of the Holy Spirit'],
            get calculation() {
                return getDaysFromEaster(year, 50);
            }
        },
        {
            name: "Trinity Sunday",
            category: 'christian',
            get calculation() {
                return getDaysFromEaster(year, 56);
            }
        },
        {
            name: "Roodmas",
            category: 'christian',
            aka: ['Feast of the Holy Cross', 'Holy Cross Day', 'Holy Rood Day', 'Crouchmas'],
            month: 9,
            day: 14,
            traditions: [
                "Read \"Of the Invention of the Holy Cross\" from The Golden Legend",
                "Read The Dream of the Rood"
            ],
            comments: 'Wednesday, Friday, and Saturday are Ember Days'
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
            aka: ['Feast of the Archangels'],
            month: 9,
            day: 29
        },
        {
            name: "All Hallow's Eve",
            category: 'christian',
            aka: ["Hallowe'en", "All Saints' Eve"],
            month: 10,
            day: 31,
            traditions: [
                "Trick or treat",
                "Write a scary story to read with the lights off"
            ]
        },
        {
            name: "All Hallows' Day",
            category: 'christian',
            aka: ["All Saints' Day", 'Hallowmas'],
            month: 11,
            day: 1,
            traditions: [
                "Read a new saint story"
            ]
        },
        {
            name: "All Souls' Day",
            category: 'christian',
            aka: ['The Commemoration of All the Faithful Departed'],
            month: 11,
            day: 2
        },
        {
            name: "Martinmas",
            category: 'christian',
            aka: ["Saint Martin's Day", 'Martlemas', 'Old Halloween', 'Old Hallowmas Eve'],
            month: 11,
            day: 11,
            traditions: [
                "Read St. Martin's story"
            ]
        },
        {
            name: "Christ the King Sunday",
            category: 'christian',
            aka: ['Reign of Christ Sunday', 'Stir-up Sunday'],
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 11, 25), 0), -35);
            }
        },
        {
            name: "Advent Sunday",
            category: 'christian',
            traditions: [
                "Light first Advent candle",
                "Start Advent devotional, like Jonathan Gibson's \"O Come, O Come Emmanuel\" or Cindy Rollins's \"Hallelujah\"",
                "Start Advent calendar",
                "Read \"A Christmas Carol\""
            ],
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 11, 25), 0), -28);
            }
        },
        {
            name: "Second Sunday of Advent",
            category: 'christian',
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 11, 25), 0), -21);
            }
        },
        {
            name: "Saint Nicholas's Day",
            category: 'christian',
            aka: ['Feast of Saint Nicholas'],
            month: 12,
            day: 6
        },
        {
            name: "Third Sunday of Advent",
            category: 'christian',
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 11, 25), 0), -14);
            }
        },
        {
            name: "Saint Lucy's Day",
            category: 'christian',
            aka: ['Feast of Saint Lucy'],
            month: 12,
            day: 13,
            comments: 'Wednesday, Friday, and Saturday are Ember Days'
        },
        {
            name: "Fourth Sunday of Advent",
            category: 'christian',
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 11, 25), 0), -7);
            }
        },
        {
            name: "Christmas Eve",
            category: 'christian',
            month: 12,
            day: 24,
            traditions: [
                "Candlelight church service",
                "Crockpot Wassail from Cindy Rollins's Hallelujah p. 128"
            ]
        },
        {
            name: "Christmas",
            category: 'christian',
            month: 12,
            day: 25,
            traditions: [
                "Read the Christmas story",
                "Read Malcolm Guite's poems \"Mary\", \"On the edge\" (Sounding the Seasons p. 14-15)"
            ]
        },
        {
            name: "Saint Stephen's Day",
            category: 'christian',
            aka: ['Boxing Day', 'Second Day of Christmas'],
            month: 12,
            day: 26,
            traditions: [
                "Read Malcolm Guite's poem \"St Stephen\" (Sounding the Seasons p. 17)"
            ]
        },
        {
            name: "Third Day of Christmas",
            category: 'christian',
            month: 12,
            day: 27
        },
        {
            name: 'Childermas',
            category: 'christian',
            aka: ["Holy Innocents' Day", 'Fourth Day of Christmas'],
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
            day: 31,
            traditions: [
                "Read Charles Dickens's \"The Chimes\""
            ]
        },
        {
            name: "All Koser's Eve",
            category: 'koser',
            get calculation() {
                return addDays(getNextOccurence(new Date(year, 5, 1), 6), -1);
            }
        },
        {
            name: "Koserstag",
            category: 'koser',
            aka: ["Saint Kosers' Day"],
            get calculation() {
                return getNextOccurence(new Date(year, 5, 1), 6);
            }
        },
        {
            name: "Hobbit Day",
            category: 'literary',
            month: 9,
            day: 22,
            comments: "The birthday of Bilbo Baggins and Frodo Baggins"
        },
    ];
    let currentYear = holidays
        .map(h => Object.assign({}, h, {"date": h.calculation || new Date(year, h.month - 1, h.day)}))
        .sort((a,b) => {
            return a.date - b.date
        });
    let today = currentYear.filter(h => h.date.toDateString() == (new Date()).toDateString());
    let futureHolidays = currentYear.filter(h => h.date > new Date());
    let nextHoliday = today.length == 0 && futureHolidays.length > 0 ? futureHolidays[0] : {};

    return {
        currentYear,
        nextHoliday,
        today
	};
}


// todo: check for traditions in:
//   Guite's sonnets
//   Swait's thanksgiving poems
//   Other poetry books
//   Psalter
//   Every Moment Holy

//   Book of Common Prayer