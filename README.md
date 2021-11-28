# Rock Paper Scissors  
  
## Table of Contents
- [Overview](#overview)
- [Setup](#setup)
- [Screentshots](#screenshots)
- [Links](#links)
- [Future Additions](#future-additions)
- [Challenges and Wins](#challenges-and-wins)
- [Code Architecture](#code-architecture)
- [Contributors](#contributors)
- [Technologies](#technologies)

## Overview

This application allows a user to play a game of 'Rock, Paper, Scissors' against the computer, which makes a random selection at gameplay. The user can make their choice simply by clicking on their selection. A 'difficult' variation is also available for a user to select, which provides additional fighter choices. The result of the game is displayed in the next view once the user makes a selection. The browser will audibly let the user know the results of the game. The side panels display the total accumulated wins for both players and persists across refreshes. 

## Setup
  
- Clone this repository down to your local machine
- Navigate into the `rock-paper-scissors` directory
- Run `open index.html` in the terminal
   
## Screenshots  
Users can choose their game type in the main view  
![Classic](https://user-images.githubusercontent.com/62816754/141864158-aeb67c41-c478-4c84-968a-49db75ad4e6e.gif)
  
Displays choices for 'Difficult' game  
![difficult-fighter-selection-view](https://user-images.githubusercontent.com/62816754/141864387-911071ff-a80c-4b36-adff-df3e730ae63b.gif)

Displays the winner of the round and automatically displays the selections again to start a new game
![winner-view](https://user-images.githubusercontent.com/62816754/141864569-10dc8f98-434e-4fe6-8eb0-26bed79fee73.gif)

## Links  
Checkout the Turing spec sheet [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)  
See it in action by clicking [here](https://mr-ryan12.github.io/rock-paper-scissors/)
  
## Future Additions
- Unlock a secret character after a specific set of wins 
- Add different types of fighters  
- Add animations to the results of the game  
  
## Code Architecture  
The application is primarily built on class-to-class interactions and instantiations. All DOM manipulated elements on the page are exclusively handled in the `main.js` file. HTML and CSS were used to develop the structure and styling of the application. 

## Challenges and Wins  
This project really helped solidify my understanding of truly separating the DOM and the Data Model. I definitely should have incorporated more developer empathy toward the beginning of the project, which would have greatly reduced the amount of time spent refactoring. I greatly appreciate the assistance from my instructors, mentor and classmates.

## Contributors    
[Ryan McBride](https://github.com/mr-ryan12)
   
## Technologies
HTML  
CSS  
JavaScript