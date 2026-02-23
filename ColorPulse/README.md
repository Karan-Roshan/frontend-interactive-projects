# ColorPulse
A simple and interactive JavaScript project where a color box changes its background color every 500 milliseconds when the user clicks **Start**, and stops when **Stop** is clicked.

This project demonstrates practical use of:
- setInterval()
- clearInterval()
- DOM Manipulation
- Event Listeners
- Random HEX Color Generation


## Project Preview
<p align="center">
  <img src="Project Screenshots/Default.png" alt="ColorPulse Screenshot" width="800">
</p>

<p align="center">
  <img src="Project Screenshots/After.png" alt="ColorPulse Screenshot" width="800">
</p>


## Features
- Smooth background color transition
- Random HEX color generation
- Start and Stop controls
- Clean and modern UI
- Responsive layout
- Professional project structure


## Technologies Used
- HTML5
- CSS3 (Flexbox, Gradients, Transitions)
- JavaScript (ES6)


## How It Works
1. When the **Start** button is clicked:
   - setInterval() runs every 500ms
   - A random HEX color is generated
   - The color box background updates dynamically

2. When the **Stop** button is clicked:
   - clearInterval() stops the color change
   - The box resets to a default color


## Key JavaScript Function
```javascript
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
```

This function dynamically creates a valid HEX color code.


## Learning Outcomes
Through this project, you will understand:
- How intervals work in JavaScript
- Difference between setInterval() and clearInterval()
- Event-driven programming
- Real-time DOM manipulation
- Generating dynamic styles using JavaScript


## Author
**Karan Roshan**  