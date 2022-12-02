![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)
# **Rock, Paper, Scissors, Lizard, Spock.**
The rock, paper, scissors, lizard, spock game is the ultimate homage to the game created in the hit T.V. series, The Big Bang Theory. This game is an extension of the current, less complex game, rock, paper, scissors. This application will allow users to play against a truly random opponent in the computer, as people who are aware or each others personality, tend to be able to gain an advantage by predicting how their opponent might guess.

This game is targetted at adults and children; in addition to, fans of the Big Bang Theory. Players will be able to learn the rules of the game and have bundles of fun with this new update to the common decision making game of rock, paper, scissors.

![image of differnet displays](/assets/images/images_of_different_display_size.png)
------
## Features
### Existing Features
- Header
  - At the top of the page the header shows the game's name centrally, Rock, Paper, Scissors, Lizard, Spock in a clear font, which is contrasting from the background.
  - The header makes it clear to the user what game they are playing.
  - On the right side of the header is a reset/refresh button, which acts to refresh if the player wants to play another game.
  - On the left side of the header is a spock hand signal icon, to provide balance to the header, with an icon either side of the header title and to provide the user with a spock reference for fun.

![image of heading](/assets/images/heading.png)

- Game Options
  - The game options include clear instructions of which icons represent which of the options, "rock, paper, scissors, lizard, spock" via a color coded list below. This colour coding buttons are interactive and allow the user to make their choice.
  - Each interaction button also contains the symbol for each option, "rock, paper, scissors, lizard, spock".
  - This section also explains to the user that the first to five wins, wins the game.

![image of game options](/assets/images/game_options.png)

- Game Results
  - When the user make a decision on what option to play. Their choice is registered in the "Your choice" field. 
  - The Javascript code generates a random choice which is registered in the "Computer choice" field.
  - The result of the game, whether the player wins or loses is generated in the "results" field.
  - The score board is then update, for player "wins" and "loses".
  - If the player reachs 5 wins or 5 loses, a message is displayed to state that the game is over and the player needs to reset/refresh to play again.

![image of game results](/assets/images/game_results.png)

- Footer
  - The footer section shows the rules of the game, "rock, paper, scissors, lizard, spock".

![image of the footer](/assets/images/footer.png)

## How to play the game
- Players can start the game by clicking any one of the icons rock, paper, scissors, lizard or spock, on the top of the page. Icons will change color to indictate which icon will be selected if clicked.
- When a particular icon is clicked by the player, the computer choice will automatically be generated at random and the resulting score will be tallied on the score board.
- If the computer reaches a score of 5 first, the player will be notified by message that they lose the game. If the player reaches a score of 5 first, the player will be notified that they win the game.
- Once the game is complete, the reset button needs to be clicked in order to start a fresh game.  

## Features Left to implement
- The coding for the generated results is very verbose and needs to be condensed. The code below was tested but didnt seem to work on the first attempt.

![image of code to be implement in the result generation section](/assets/images/more_consise_code_for_result.png)

- The rule which allow you to win the round needs to appear when the user wins or loses; for example, if the user gets "Lizard" and the computer gets "Spock", when the user wins, another section should show the rule that, "Lizard posions Spock" etc.

## Testing
- The game has been tested on Chrome
- The game header, instruction, options, results and footer text is readable and understandable.
- The game results are correct when the game is functioning correctly.
- The score board functions correctly.
- The game will conclude correctly when five wins or loses are achieved.
- The game reset button works correctly.

## Validator Testing
- The colors (dark yellow for Lizard) has been registered as an issue on the lighthouse test.
- Also, the color coded method (explanation same color as the icons) is reducing the accessibility score on the lighthouse test. Each icon need to be directly labelled.

![lighthouse test showing poor accesibility](/assets/images/lighthouse_test.png)

- jshint.com service showed 17 warnings in the javascript file.

![jshint warnings](/assets/images/javascript%20warnings.png)

- The W3C HTML checker showed 5 warnings and 5 errors. These errors are due to a duplicate use of the id's for rock, paper, scissors, lizard and spock. This is due to having the icons and the outer buttons needing to follow the same path when clicked. The initial bug in the code was when the outer button was clicked the game worked correctly; however, when the icon was clicked nothing would happen. The fix to this was to use the same ID for both the outer button and the icon so they both would activate the same JS function when clicked. 

![5 errors and 5 warnings found in HTML](/assets/images/W3C%20HTML%20validator.png)

- W3C CSS validation service showed that no errors were found in the CSS.

![no erros in css](/assets/images/css_validator.png)

## Bugs fixed
- The bug in the code was related to the icons: rock, paper, scissors, lizard, spoke on the top of the page. The icons has an outer button and an inner icon. When the outer button was clicked the code would work correctly, as the id of the outer buttons was function with the JS. However, the inner icons (which were inside the buttons) was not linked correctly to the JS and would report nothing when clicked. This would then create a blank input. The fix (which reported a warning and error for each instance in the HTML validator) was to give the outer button and the inner icon the same id. Both now interact with the JS correctly, inspite of the validator error, and has allowed the game to be functional.
- The stray footer has also been fixed and is now placed in the html correctly. 

## Deployment
- The site was deployed to Github pages.
- The live link can be found at [github](https://daithigarry.github.io/rockpapersissorslizardspock2/)

## Content
- The site was styled on the Love Maths project.
- All javascript code is my own from my learnings from the course and piecing together ideas from w3schools and other websites.
- The HTML layout is similar to the Love Maths project but with large alterations and in most sections with total new code.
- The CSS layout is similar to the Love Maths project but with large alterations and in most sections with total new code.
- The icons were taken from fontawesome.
- The image icon was taken from the web.
