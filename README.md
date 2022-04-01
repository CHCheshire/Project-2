# Two Classic Games 

This is a website where I will host two games; Noughts and Crosses and Checkers. These have been made in Javascript and will track the scores at the bottom for both of these games. These will be two player games for each one, with a home page to navigate between each one.
 



## Features 

### Existing Features

- __Navigation Bar__





- __The home page__

 The home page is where the user can navigate between the two games and also has links to my linkedin and github in the footer as well.



- __Noughts and Crosses__

This is the page for Noughts and Crosses, the players play N&C and their score for how many games each player has won. There is a button at the bottom of the page to restart the game and also one to reset the score as well. 




## Testing 

The purpose of this project was to create a home page with seperate pages for multiple games, Nought and Crosses and Checkers. I orginally wanted Connect Four instead of Checkers however, when looking over the examples for this, most examples either used advanced Javascript or where just out of the scope of the project. So I had instead opted for Checkers as this was more achievable given my experience in Javascript and the scope of the project. For the home page, I have added some media queries due to the size of the pictures and the layout of the page. So at 1200px the images will shrink down to 250px in height and width so they can fit on the page. I orginally just made them thinner but this made the images stretch so I shrunk them in height as well. At 850px I also made it so that the options go from a flex display to a block display so that they take up less width on the screen. Due to the images being smaller now they will comfortably fit on smaller screens for phones and tablets. 

For the Noughts and Crosses game, there was a fair bit of testing I needed to do with for this especially regards to the javascript. I made the game and all it's features rather thin; There's not much that's needed on the screen for the game so I made sure to make it quite thin and centred so that I wouldn't need to worry about whether the screen was a phone, tablet or computer screen. I have a fairly large monitor and the game is big enough and doesn't look odd with the unused space on the sides to me and shrinks down for thinner screens easily enough as well. 

So when I made this game I orginally intended on having the choice of playing against AI or a player however in the end I opted to have it so that it was only playable against another player. This was due to how you can program the 'AI' for these games and, from what I could see online and through my research, there were only two viable ways I could do this; Either the computer chooses at random or they follow a specific algorithm/set of decisions when making their move and neither of these I particularly liked. I originally intended for random however this led to a rather unsatisfying playing experience; the AI could be a move away from winning and just selects a square that wasn't relevant and lose because of it. It just seemed a little wrong to me so I decided against that for the AI and instead looked to more structured AI which has the opposite problem; it's way too good at the game. From my research online, the other way to program the AI for this is called "MinMax" whereby it will select moves that maximise the chance of winning whilst minimising the chance of losing. I have played against this myself to test it out and it leads to only being able to at best draw as noughts and being able to win as crosses by playing the same moves every game as it can't change its strategy so to speak. These seemed to be the only viable ways I could see and think of myself to make an AI. A potential 'fix' to this could of been to have a function in place at the start of each game to randomly decide between the two personalities so to speak, to make the AI feel a bit different each time. But again I opted against this as these two are so far apart in difficultly that it would've been jarring to play against each time. So ulitmately after all that, I decided to keep the game as player vs player as this seemed more appropriate for this type of game due to limitations in the AI that i had. 

Now for the actual game itself, I researched various different ways to make the game and most iterations of the game where made using other forms of coding languages/stuff outside the scope of the project such as using Python and JQuery. I eventually found a way to make it using purely javascript and used that as a guideline for my code, where I would style it in my own way and also add to it as well with my own features. The first part was making the grid itself, I have the "grid" div in HTML that refers to the actual playing space itself with each div within that representing one of the nine boxes in Noughts and Crosses. This was then styled in css to show that on screen; The grid is a width of 238px simply due to the background being even at that width, any more and it protrudes on the right hand side so I played around with the width until I was happy with 238px. So after styling it I then proceeded to start coding it for the actual functionality of the game. 

For the styling of the games, I originally had it that there were two messages at the top, one stating who's turn it was and that crosses would start. However I streamlined this down to only one message as it looked a little odd to me having the "Crosses start" message the entire way through the game. So now the "Crosses start" message gets replaced with who's turn it is and the outcome of the game, declaring a winner or a draw. 

So the script for the game essentially works like this; the players click on a square in the grid and the game constantly compares the boardstate to the winningArrays, as soon as one of the players gets three in a row, the script sees that as a winning array and declares that player a winner and adds one to their score at the bottom. If the game doesn't see a combination that matches that winning array, it will instead declare it a draw. The board can be reset by clicking the "Restart the game" button on the screen. The score will be cleared by clicking "Reset the score" button which sets both players score back to 0. 

A fair amount of testing came from how to implement the scoreboard for the game. I knew it needed to be triggered during the declareWinner secion of the script and originally tried having variables at the top of the script, crossesScore and noughtsScore. I then tried calling on these within the declareWinner section with the intent on adding to them using ++ to add one to the variable to show a win. This initially didn't work due to me not coding it properly but was a flawed way of doing it for two reasons; it was a lengthy bit of code to add in the if statement and also I returning the declareWinner statement which can cause issues for any code after it. When something is returned in a loop or function in javascript, any code after becomes unreachable and thus unable to run. This in some cases can be resolved by placing the return statement at the end of the code however I wanted to tidy up the code so instead got rid of the variables and code to add the score and made them into seperate functions, crossesScore and noughtScore. These when called add 1 to their respective score. However the problem still remains with returning the declareWinner statement as that messes up the process, even if I put it after the score function. So to resolve this I also made the declareWinner statement into a function and changed checkForWinner statement accordingly as well so that it would call for both and add to the score when that person won. 

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchcheshire.github.io%2FProject-1-Warhammer%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchcheshire.github.io%2FProject-1-Warhammer%2F)

### Unfixed Bugs



## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/CHCheshire/Project-1-Warhammer), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://chcheshire.github.io/Project-1-Warhammer/)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/CHCheshire/Project-1-Warhammer.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/CHCheshire/Project-1-Warhammer)


## Credits 

### Content 


### Media




