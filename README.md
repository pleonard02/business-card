# Interactive Digital Business Card

An interactive digital business card built with HTML, CSS, and vanilla JavaScript. The card uses a 3D flip animation to display professional information on the front and a QR code linking to my LinkedIn profile on the back.

The project was also designed with keyboard accessibility in mind so that the card can be operated without a mouse.

## Features

- Interactive 3D card flip animation
- Click or tap to flip between the front and back of the card
- QR code linking to my LinkedIn profile
- Clickable LinkedIn QR code for users viewing the card digitally
- Keyboard navigation and activation
- Visible keyboard focus indicator
- Responsive layout
- Accessible interactive behavior for nested elements

## Accessibility

The card can be operated using either a mouse or keyboard.

The card itself can receive keyboard focus using `tabindex="0"` and uses `role="button"` to communicate its interactive purpose to assistive technologies.

When the card has keyboard focus:

- **Enter** flips the card
- **Space** flips the card
- **Tab** can move focus to the LinkedIn link on the back of the card
- **Enter** activates the LinkedIn link without causing the card to flip

A visible focus outline indicates which interactive element currently has keyboard focus.

### Keyboard Focus

![Business card showing visible keyboard focus](../images/card-front.png)

### Accessible Back of Card

![Back of business card with LinkedIn QR code](../images/card-back.png)

## JavaScript Interaction

The project uses DOM event listeners to control the card's behavior.

`classList.toggle()` adds and removes the `is-flipped` class, allowing CSS to control the 3D transformation.

Keyboard events provide equivalent functionality for users who do not use a mouse. The keyboard handler checks `event.target` so that keyboard events originating from the nested LinkedIn link do not accidentally trigger the card's flip behavior.

`event.stopPropagation()` prevents clicks on the LinkedIn link from bubbling to the card's click handler.

## Technologies

- HTML5
- CSS3
- JavaScript
- CSS 3D Transforms
- DOM Event Handling
- ARIA
- Responsive Design

## What I Learned

This project began as an experiment with CSS 3D transforms and became an opportunity to work with DOM events and accessibility.

While building the card, I practiced:

- Selecting DOM elements with `querySelector()` and `getElementById()`
- Adding and removing visual states with `classList.toggle()`
- Handling mouse and keyboard events with `addEventListener()`
- Understanding event bubbling
- Using `event.stopPropagation()` to control nested interactions
- Using `event.target` to determine where an event originated
- Using `event.preventDefault()` when implementing custom keyboard behavior
- Making a custom interactive element keyboard accessible
- Using `:focus-visible` to provide a clear visual focus indicator

One of the most important challenges was ensuring that the LinkedIn link remained independently interactive. Because the link is nested inside the clickable card, its mouse and keyboard events could also trigger the card's event handlers. Handling event propagation and checking the event target allowed both interactions to work independently.

## Project Structure

    digital-business-card/
    ├── images/
    │   ├── p_linkIn2.jpg
    │   └── linkedIn_qr.png
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

## Future Improvements

Potential future improvements include integrating the card into my portfolio site and testing the interface with additional assistive technologies and screen readers.

## Author

**Priscilla Leonard**

Software Engineering Student

Connect with me on LinkedIn using the QR code on the card.