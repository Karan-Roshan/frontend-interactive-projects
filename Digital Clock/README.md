# World Digital Clock
A modern and responsive **Global Time Zone Digital Clock** built using **HTML, CSS, and JavaScript**.  
This project displays real-time clocks for multiple countries with dynamic time, date, and weekday updates every second.


## Project Preview
<p align="center">
  <img src="Project Preview/World Digital Clock Preview.png" alt="World Digital Clock Preview" width="800"/>
</p>


## Features

- Displays real-time clocks for:
  - 🇮🇳 India
  - 🇺🇸 New York
  - 🇬🇧 London
  - 🇯🇵 Tokyo
- Updates every second
- Dynamic Date display
- Day of the week display
- Modern glassmorphism UI
- Animated glowing heading
- Fully responsive design
- Uses JavaScript timezone support


## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Google Fonts (Orbitron & Poppins)


## How It Works
The project uses JavaScript’s built-in `Date` object along with:
- `toLocaleTimeString()`
- `toLocaleDateString()`

These methods format time and date according to:
- Locale (e.g., `en-IN`, `en-US`)
- Timezone (e.g., `Asia/Kolkata`, `America/New_York`)

The clocks update every second using:
```javascript
setInterval(startClocks, 1000);
```


## Core Function
```javascript
function updateClock(timeEl, dateEl, dayEl, locale, timezone, hour12 = false) {
    const now = new Date();

    timeEl.innerHTML = now.toLocaleTimeString(locale, {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: hour12
    });

    dateEl.innerHTML = now.toLocaleDateString(locale, {
        timeZone: timezone,
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    dayEl.innerHTML = now.toLocaleDateString(locale, {
        timeZone: timezone,
        weekday: "long"
    });
}
```


## Learning Outcomes
- DOM Manipulation
- Working with Date & Time in JavaScript
- Timezone handling
- Reusable functions
- Clean UI design
- Responsive layouts


## Author
**Karan Roshan**  