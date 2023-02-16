# My React Portfolio

## Description

This is a simple react-based portfolio I will use to display my projects and contact info to employers (once it's styled properly). There is conditional rendering done based on which tab is being clicked on, passing this state to the components and rendering the corresponding one. This project used react as well as stylesheets for each react component. I made this project to show I have a general understanding of react components and conditional rendering.

## Table of Contents

- package.json: contains our dependencies for this project
- public folder: contains the base html used by react
- src folder:
    - index.js: the top level of react which contains the App component
    - App.js: the main component that displays header content, as well as displays the Tabs component and Portfolio component
    - components folder: 
        - Portfolio.js: the container that will display either Home, Projects, or Contact based on state. Comes with it's corresponding stylesheet.
        - Home.js: a brief description of myself with work and school history. Comes with corresponding stylesheet.
        - Projects.js: Displays gifs of projects with a short description of each and a link to a deployed site, if one exists. Comes with a corresponding stylesheet.
        - Contact.js: gives links to my github and linkedIn, as well as my email. Comes with corresponding stylesheet.


