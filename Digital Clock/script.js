// Get Time Elements
const indiaTime = document.getElementById("india_clock");
const newYorkTime = document.getElementById("newYork_clock");
const londonTime = document.getElementById("london_clock");
const tokyoTime = document.getElementById("tokyo_clock");

// Get Date Elements
const indiaDate = document.getElementById("india_date");
const newYorkDate = document.getElementById("newYork_date");
const londonDate = document.getElementById("london_date");
const tokyoDate = document.getElementById("tokyo_date");

// Get Day Elements
const indiaDay = document.getElementById("india_day");
const newYorkDay = document.getElementById("newYork_day");
const londonDay = document.getElementById("london_day");
const tokyoDay = document.getElementById("tokyo_day");

function updateClock(timeEl, dateEl, dayEl, locale, timezone, hour12 = false) {
    const now = new Date();

    // Time
    timeEl.innerHTML = now.toLocaleTimeString(locale, {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: hour12
    });

    // Date
    dateEl.innerHTML = now.toLocaleDateString(locale, {
        timeZone: timezone,
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    // Day
    dayEl.innerHTML = now.toLocaleDateString(locale, {
        timeZone: timezone,
        weekday: "long"
    });
}

function startClocks() {
    updateClock(indiaTime, indiaDate, indiaDay, "en-IN", "Asia/Kolkata");
    updateClock(newYorkTime, newYorkDate, newYorkDay, "en-US", "America/New_York", true);
    updateClock(londonTime, londonDate, londonDay, "en-GB", "Europe/London");
    updateClock(tokyoTime, tokyoDate, tokyoDay, "en-JP", "Asia/Tokyo");
}

startClocks();

// Then update every second
setInterval(startClocks, 1000);