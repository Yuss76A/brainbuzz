# Brain Buzz


## Introduction

Welcome to my quiz game project! I've always been fascinated by trivia games and quizzes. I believe they not only exercise the mind but also offer an endless opportunity to learn new things. This project is a reflection of my passion for creating engaging and educational experiences. Whether you're here to challenge yourself or to discover intriguing facts, I hope you find this quiz enjoyable and enriching. Dive in and start exploring the world of trivia!


## User Objectives

* Intuitive and straightforward gameplay.
* Engaging and captivating trivia experience.
* Visually appealing interface.
* High score leaderboard to track top performances.


## User Narratives:

* As a player, I wish for the quiz to be straightforward and easy to grasp.
* As a player, I hope the quiz will be enjoyable and engaging.
* As a player, I desire a site with a compelling and attractive design.
* As a player, I expect to see a leaderboard showcasing top scores.
* As a player, I want to challenge my manga knowledge and discover intriguing facts.


## Site Objectives:

* To develop a quiz that is enjoyable and captivating for users.
* To design a visually attractive quiz to attract and retain users.
* To produce content that amuses and captivates users.
* To ensure the quiz is accessible to all potential users.


## Requirements:

* Simple gameplay.
* Visually appealing design.
* Engaging and entertaining content.
* Accessibility for all user groups.
* High score leaderboard.


## Design Choices

### Fonts 

[Google Fonts](https://fonts.google.com/ "Google Fonts") 

This project utilizes Google Fonts, specifically the Inter font, to ensure a consistent and cohesive appearance across all pages. By using a single font, we aim to maintain a unified design aesthetic, minimizing distractions and enhancing readability for users. The simplicity of Inter supports a clean and professional look, allowing the content to take center stage.


### Colours

A variety of colors has been employed throughout the project to create an engaging and vibrant visual experience. Careful consideration was given to ensure that the colors complement each other, providing a harmonious and soothing aesthetic. This approach was chosen to enhance the overall user experience, allowing the design to be visually appealing without being overwhelming or distracting.

![Colour Palette](docs/screenshots/colours.png)

* #DAA520 - Throughout the project, the color DAA520, known as Goldenrod, has been consistently used as a backdrop along the right and left sides of all pages. This choice creates a warm and inviting frame for the content. In the central section, the background is divided by a softer color that complements the Goldenrod, ensuring a balanced and seamless integration across the entire page. This design choice enhances visual cohesion and draws attention to the central content. However, on the "Best Scores" page, the Goldenrod color extends across the entire page without any dividing, providing a striking and cohesive backdrop for showcasing high scores.

* #FFFDD0 - To provide a harmonious contrast, the color FFFDD0, a soft cream, is used to divide the Goldenrod background in the middle, offering an appealing backdrop for the central content. On the "Best Scores" page, while the Goldenrod spans the entire page, FFFDD0 is featured as the background color for the "best of the best" container in the center, enhancing its prominence and providing a visually pleasing highlight against the Goldenrod.

* #DFF2D8 - The color #DFF2D8 was utilized as the background for the answers container, providing a gentle and soft backdrop.

* #222 - The color #222 was selected for the page font, offering a sleek and modern look that ensures readability and complements the overall design.

* #17A2B8 - The color #17A2B8 has been used for all the buttons throughout the project, adding a vibrant and inviting touch that enhances user interaction and complements the site's overall aesthetic.

* #FFFFFF - The color #FFFFFF was used for the fonts inside the buttons, providing clear and crisp contrast against the button color for optimal readability.

* #F0B27A - The color #F0B27A was used as the background color for the option letters A, B, C, D, and E, offering a warm and inviting look that distinguishes the options clearly.

* #90EE90 - The color #90EE90 was used to indicate when a user answers a question correctly, providing a pleasant and positive visual feedback.

* #FF7F7F - The color #FF7F7F was used to highlight when a user answers a question incorrectly, offering a clear and immediate visual cue.


* * Note - The colors mentioned—#FFFDD0, #222, #17A2B8, #FFFFFF, #F0B27A, #90EE90, and #FF7F7F—are the most prominent within the project and are clearly visible throughout the design, playing a key role in shaping the user experience. While these are the main colors used, there might be some colors that I inadvertently 
forgot to mention.


### Structure

* The quiz site consists of three main pages, or four if we include the "Best of Best Scores" page. The first page is the welcome page, featuring motivational text that explains the benefits and enjoyment of taking quizzes. This page also contains two buttons: one to start the game and another to view the top scores. Once the "Play" button is pressed, users are taken to the second page, where they can begin answering questions. This page includes a question counter and a score counter. After all questions have been answered, users proceed to the third page. The third page provides humorous text, along with buttons for "Home Page" and "Retry," allowing users to play again and aim to improve their scores. After entering their username and pressing the "Save" button to save their score, users are automatically redirected to the main page. A fourth page is accessible via the "Best Scores" button on the main page.



## Features

### Favicon

![favicon](assets/favicon/logo.png)

* The favicon was created using two complementary colors and features the name of the quiz along with my initial, "Y."

* The favicon was designed utilizing the tool available at [favicon.io](https://favicon.io/ "favicon.io") .


### Quiz Name

![Logo](docs/screenshots/quizname.png)

* I chose the name "Brain Buzz" because it perfectly encapsulates the excitement and stimulation that quizzes provide. The word "Brain" highlights the focus on engaging and challenging your intellectual abilities, while "Buzz" suggests the energizing and lively feeling that comes from learning and discovering new things. Together, "Brain Buzz" conveys the idea of an exhilarating mental workout that's both fun and enriching. It's a name that reflects the dynamic and interactive experience I want to offer to users, keeping their minds active and curious.


### First Page 

![First Page](docs/screenshots/initialpage.png)

* The first page of our quiz game is designed to warmly welcome and motivate you to embark on a journey of fun and learning. It features an inspiring message that highlights how enjoyable and rewarding playing a quiz can be. Quizzes not only challenge your knowledge but also provide a fantastic opportunity to discover new facts and have fun along the way. To begin your adventure, simply click the "Play" button, which will take you directly to the start of the game. If you're curious to see how you stack up against the best, the "Best Scores" button will lead you to the "Best of Best" page, where the top scores are showcased. Dive in and let the challenge begin!


### Game Page

![Game Page](docs/screenshots/secondpage.png)

* The game page is where the excitement truly begins. Here, you'll be presented with a series of questions, each offering five possible answers. As you navigate through the quiz, a question counter keeps track of your progress, allowing you to see how far you've come. Meanwhile, a points counter tallies your correct answers, giving you real-time feedback on your performance. This dynamic setup ensures that you're always aware of your standing, adding an engaging layer of challenge as you strive to increase your score. Get ready to test your knowledge and enjoy the thrill of the quiz!


### Scores Page

![Scores Page](docs/screenshots/finalpage.png)

* Upon completing the quiz, you'll be directed to the scores page, where you can view your results and submit your score with the "Save" button. This page offers a clear overview of how well you've performed, celebrating your achievements and encouraging you to aim even higher. Once you submit your score, you'll be automatically redirected to the home page, making it easy to start a new session or explore other features. Additionally, the page provides two convenient buttons: one to return to the home page and another to play again. Whether you're eager to take on the quiz once more or simply want to reflect on your performance, the scores page serves as a perfect culmination of your quiz experience.


### Best Scores Page

![Best Scores Page](docs/screenshots/bestofbest.png)

* The "Best Scores" page, which you can access from the home page by clicking the "Best Scores" button, showcases the top performances within the quiz game. Here, you'll find a leaderboard highlighting the highest scores, inspiring a friendly competition among players. This page serves as a motivating benchmark, challenging you to improve your score and see how you measure up against other quiz enthusiasts. It's an exciting addition that not only acknowledges the best players but also encourages everyone to aim for the top spot.



### Testing 


### Functional Testing

#### Play Button

* Feature Overview - Engaging button designed to initiate the quiz.
* Anticipated Result - Clicking the button should direct the user to the quiz screen, displaying the first question along with the counters.
* Procedure - Clicked the start button.
* Outcome - Functioned as intended.

#### Best Scores Button

* Feature Overview - Interactive button designed to open the best scores section.
* Anticipated Result - Clicking the button should display the best scores screen. Initially, it should not show any scores until the first score is submitted.
* Procedure - Clicked the open best scores button; no high scores were displayed on initial launch.
* Outcome - Functioned as intended.

#### Retry Button 

* Feature Overview - Interactive button designed for restarting the quiz.
* Anticipated Result - Clicking the button should redirect the user directly to the game page to start a new game, with counters reset to zero and questions reloaded.
* Outcome - Functioned as intended.

#### Home Page Button

* Feature Overview - Interactive button designed to navigate back to the home page.
* Anticipated Result - Clicking the button should redirect the user to the main page, from which they can choose to start a new game or view the best scores. This button is also available on the best scores page and functions similarly there.
* Procedure - While on an active page or the best scores page, click the home page button; confirm redirection to the main page and availability of options to start a new game or access the best scores.
* Outcome - Functioned as intended.

#### Question Counter

* Feature Overview - A counter that indicates to the user which question they are currently on.
* Anticipated Result - Should begin at 1 and increment by 1 after the user answers each question.
* Procedure - Start the quiz and progress through a few questions.
* Outcome - Functioned as intended.


#### Score Counter

* Feature Overview - A counter that informs the user of their current score.
* Anticipated Result - Should begin at 0 and increase by 15 for each correct answer provided.
* Procedure - Start the quiz and verify that the counter increments with correct answers and remains unchanged with incorrect answers.
* Outcome - Functioned as intende


#### Correct or Incorrect Feedback 

* Feature Overview - Provide feedback to inform the user if their chosen answer is right or wrong.
* Desired Outcome - When an answer is chosen, the container of the correct answer should highlight in green, and red if the answer is incorrect.
* Testing Procedure - Begin the quiz, choose a correct answer, then choose an incorrect answer.
* Result - Performed as anticipated.
