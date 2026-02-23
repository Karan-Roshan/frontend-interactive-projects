# KeyEvent Explorer
An interactive JavaScript project that detects and displays keyboard key details in real-time.

When a user presses any key on the keyboard, the application dynamically shows:
- Key Value  
- KeyCode  
- Physical Code  

This project demonstrates DOM manipulation, keyboard events, and dynamic HTML rendering using JavaScript.


## Project Demo
### Before Pressing Any Key
<div align="center">
  <img src="Project Screenshots/Before Pressing Key.png" alt="UI Before Pressing Key" width="700">
</div>

### 🔹 After Pressing a Key

<div align="center">
  <img src="Project Screenshots/After Pressing Key.png" alt="UI After Pressing Key" width="700">
</div>


## Tech Stack
- HTML5
- CSS3
- JavaScript


## Folder Structure
```
KeyEvent-Explorer/
│
├── index.html
├── style.css
├── script.js
├── Project Screenshots/
│   ├── Before Pressing Key.png
│   └── After Pressing Key.png
└── README.md
```


## How It Works
1. Select the `#output` element using `querySelector`.
2. Add a `keypress` event listener to the `window`.
3. Capture key details using:
   - `e.key`
   - `e.keyCode`
   - `e.code`
4. Dynamically inject a table into the DOM using template literals.
5. Handle special case for the Space key.


## Features
- Clean and modern UI
- ⌨Real-time key detection
- Dynamic table rendering
- Centered responsive layout
- Beginner-friendly JavaScript project


## What You Learn
- DOM Manipulation
- Keyboard Events
- Event Handling
- Template Literals
- Conditional Rendering


## Author
**Karan Roshan**  