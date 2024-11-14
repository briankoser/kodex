module.exports = function () {
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
        }
    ];
    let currentYear = holidays.map(h => Object.assign({}, h, {"date": h.date || new Date(year, h.month - 1, h.day)}));
    let today = currentYear.filter(h => h.date.toDateString() == (new Date()).toDateString());



    return {
        currentYear,
        today
	};
}




//   - name: Thanksgiving
//     slug: thanksgiving
//     category: american
//     calculation: 

//   - name: Twelfth Night
//     slug: twelfth-night
//     category: christian
//     month: 1
//     day: 5
//   - name: Epiphany
//     slug: epiphany
//     category: christian
//     month: 1
//     day: 6
//     traditions:
//       - King Cake
//     comments:
//       - King Cake recipe in Hallelujah
//   - name: Candlemas
//     slug: candlemas
//     category: christian
//     month: 2
//     day: 2
//   - name: Roodmas
//     slug: roodmas
//     category: christian
//     month: 9
//     day: 14
//     traditions:
//       - Read "Of the Invention of the Holy Cross" from The Golden Legend
//       - Read The Dream of the Rood
//     comments:
//       - Also called Holy Cross Day
//   - name: Feast of St. Eustace
//     slug: feast-of-st-eustace
//     category: christian
//     month: 9
//     day: 20
//     traditions:
//       - Drink Jägermeister
//   - name: Michaelmas
//     slug: michaelmas
//     category: christian
//     month: 9
//     day: 29
//   - name: All Hallow's Eve
//     slug: all-hallows-eve
//     category: christian
//     month: 10
//     day: 31
//     traditions:
//       - Trick or treating
//       - Writing a scary story to read with the lights off
//   - name: All Saint's Day
//     slug: all-saints-day
//     category: christian
//     month: 11
//     day: 1
//     traditions:
//       - Read a saint story
//   - name: All Souls' Day
//     slug: all-souls-day
//     category: christian
//     month: 11
//     day: 2
//   - name: Martinmas
//     slug: martinmas
//     category: christian
//     month: 11
//     day: 11
    
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
//   - name: First Day of Lent etc.
//   - name: Lazarus Saturday
//   - name: Palm Sunday
//   - name: Holy Monday
//   - name: Holy Tuesday
//   - name: Spy Wednesday
//   - name: Maundy Thursday
//   - name: Good Friday
//   - name: Holy Saturday
//   - name: Easter Sunday
//   - name: Second Day of Eastertide etc
//   - name: Ascension of the Lord
//   - name: Pentecost
//   - name: Trinity Sunday

//   # Revised Common Lectionary
//   # O Come, O Come Emmanuel
//   # Be Thou My Vision
//   # Book of Common Prayer?
//   # Cindy Rollins's Hallelujah
//   # Guite's sonnets
//   # Swait's thanksgiving poems
//   # Psalter
//   # Every Moment Holy