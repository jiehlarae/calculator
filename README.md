# Calculator Project

This is a self-initiated project where I created a calculator application from scratch. The goal was to practice and apply my HTML, CSS, and JavaScript skills, focusing on creating a functional and visually appealing calculator interface. This project features basic arithmetic operations, percentage calculation, and a delete function, all built with a combination of Flexbox and CSS Grid for layout.


## Table of Contents
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Author](#author)


## Overview
This project is a simple calculator with basic arithmetic operations and additional functionalities such as percentage calculation and deletion of input. I aimed to create a functional and visually appealing calculator interface while reinforcing my understanding of JavaScript, particularly DOM manipulation and event handling. The layout is achieved using Flexbox and CSS Grid, ensuring a responsive and clean design.

## Screenshot
![Calculator Screenshot](/sc.png)

## Links
- Solution URL: [GitHub Repository]()
- Live Site URL: [jiehlarae.github.io/calculator]()

## Built With
- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid for layout
- JavaScript for interactivity

## What I Learned
Working on this project helped me reinforce my understanding of DOM manipulation using JavaScript. I learned how to efficiently use the `target` element in event handling to identify which button was clicked and apply the appropriate action. Additionally, I explored the use of `data-num` attributes to dynamically manage button inputs and operations.

```javascript
equalBtn.addEventListener('click', function () {
    try {
        let result = new Function('return ' + display.value)();
        display.value = result;
    } catch (e) {
        display.value = "ERROR"
    }
});
```

## Continued Development
I plan to continue focusing on improving my JavaScript skills, especially in manipulating the DOM and handling user interactions. Additionally, I want to explore more complex CSS layouts and design techniques. Enhancing the calculator with additional features, such as keyboard support and more advanced operations, is also on my to-do list.

### Author
- *Github:* [@jiehlarae](https://github.com/jiehlarae)
- *X:* [@JiehlaDacara](https://x.com/JiehlaDacara)
