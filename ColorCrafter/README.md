# ColorCrafter
**ColorCrafter** is a stylish and interactive web application that changes colors with a single click.  
Built using HTML, CSS, and JavaScript, this project demonstrates DOM manipulation, event handling, and dynamic styling.

> "Crafting colors with a single click."


## Project Screenshots
### Main Interface
<img src="Project Screenshots/Default.png" alt="ColorCrafter Default UI" width="600"/>

### After Color Change
<img src="https://github.com/Karan-Roshan/frontend-interactive-projects/blob/716bc9ac70a5bef0ccf6682223126ddd7afc76a9/ColorCrafter/Project%20Screenshots/%236F1D1B.png" alt="Color Change Example" width="600"/>


## Features
- Random dark aesthetic color generator
- One-click color change
- Displays selected hex color code
- Smooth transition effects
- Responsive and clean UI
- Modern gradient background


## Tech Stack
- **HTML5** – Structure
- **CSS3** – Styling & Animations
- **JavaScript (Vanilla JS)** – Logic & DOM Manipulation


## How It Works
1. A predefined array of dark aesthetic colors is stored in JavaScript.
2. When the user clicks the **"Change Me"** button:
   - A random index is generated.
   - A color is selected from the array.
   - The background of the color box changes.
   - The selected hex code is displayed inside the box.


## Core JavaScript Logic
```javascript
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
colorBox.style.backgroundColor = randomColor;
```

## Author
**Karan Roshan**
