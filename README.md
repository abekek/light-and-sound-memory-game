# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Alibek Kaliyev**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/organic-glossy-cherry)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a text showing a number of mistakes made by a user

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Repeat back the pattern by pressing buttons!
![1](http://g.recordit.co/ncdxbsekz3.gif)

You can make up to 3 mistakes.
![2](http://g.recordit.co/pmcEccQ0yJ.gif)

Think faster or you gonna lose!
![3](http://g.recordit.co/qqVa5pcLXC.gif)

Win by completing the entire pattern.
![4](http://g.recordit.co/p0wQcpVtHy.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- [How do I use this JavaScript variable in HTML?](https://stackoverflow.com/questions/30035932/how-do-i-use-this-javascript-variable-in-html)
- [Create a simple 10 second countdown](https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown)
- [How TO - JavaScript Countdown Timer](https://www.w3schools.com/howto/howto_js_countdown.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

The main challenge that I encountered in creating this submission was creating a ticking clock because I have never worked with it previously.
It was a little bit challenging to consider all cases when the interval should be cleared or set. Sometimes the timer was going to a negative
number even though I stopped the game, and in other cases, the timer was changing too quickly. That is why, I cleared the timer every time I
click the STOP button, and every time the user makes a guess. I also started a timer only when the user hits the start button, and when the next
sequence starts to play. I spent around 30-40 minutes playing the game and debugging the code of the ticking clock. I also leveraged Internet resources
like StackOverflow and W3 schools to learn more about the correct implementation of `setInterval` and `clearInterval`. Generally, I think this helped me to
learn more about the UX aspect of building any application, and some game design.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

After completing my submission, I am curious about the other ways this web application can be developed. I see that currently, we have 3 main files: index.html,
script.js, and style.css that build the entire web page. However, as the complexity and size of the program increase, it is harder to read and edit code by scrolling
hundreds of pages of these files. This is a drawback that I encountered during development. I am curious if it is possible to modularize the code of HTML and JavaScript
without using cool libraries like React and Vue. Moreover, I am curious about how this kind of game would be deployed on the server, and how we can optimize it for all users.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

As I mentioned in the previous response, I would spend my time modularizing the code into multiple subfiles so that other developers will find it easier to implement additional
features or debug the code. I would also add features like a progress bar that would show the length of the entire sequence in the game so that the user can see their progress.
Additionally, I would add a registration page, a leaderboard, and a scoring system so that my friends and I would be able to compete with each other in memorizing sequences.
I think another cool feature would be to shuffle buttons in the layout so that memorization will have a higher difficulty.

## Interview Recording URL Link

The link was removed due to privacy reasons

## License

    Copyright Alibek Kaliyev

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
