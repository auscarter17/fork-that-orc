# Fork that Orc ![gpl3.0 License](https://img.shields.io/badge/license-gpl3.0-blue)

  # About
  Fork That Orc is a RPG character generator that allows you to create your next toon by either filling out your desired information, or by using random values to instantly generate names, stats, and gear. It has an easy to use GUI that will help you get your build up and running quickly, just in time for your next dungeon crawling session. 
  
  ## Table of Contents
  - [Intallation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license)
  - [Questions](#questions)

  # Installation
  Download the repo. Point your terminal to the directory of the repo, and run 'npm i' to install the required modules for the application to run. Fork That Orc also requires a .env file. Create your .env at the root of the directory, and fill in the values as directed in the config>connection.js file. After the packages are installed and the .env is in place, run 'npm start' in your terminal. When you recieve the 'Now Listening!' confirmation message, navigate to localhost:3001 in your browser to see the application. If you encounter an error after running start, check that your .env contains the proper information and is at the root of the application (fork-that-orc/.env). 
  The application is also hosted on [Heroku.](https://forkthatorc.herokuapp.com/)

  # Usage

  ## Signing Up/Logging in
  After running the application, you will be brought to the dashboard which will prompt you to create an account. Type in your desired username and password. Passwords are required to be at least four characters long, and are case-sensitive. Click 'Sign Me Up' to create your account. If you've previously created an account, select the 'Or Log In' button below the sign-up form to be taken to a log-in screen where you can enter your username and password and access the heroes on your account. 

  <img src="https://i.imgur.com/Y8Q2gB8.jpg" alt="login screen" height="300">

  After you are signed in, you'll be taken to a user dashboard where you can see your heroes. If you haven't created any heroes, you'll be greeted by a sign informing you to navigate to the 'Create' button and begin building one.

  Click the 'Logout' button in the top right at any time to log out of Fork That Orc and be returned to the sign-up screen.  

  ## Creating a Hero
  Click the 'create' button at the top of the window, and you'll be taken to a form where you can input the details of your hero, including name, stats, and equipment. Under Character Name, type in the name of your new hero, or click "Randomize" to have one generated for you. If you're unhappy with the random name that is generated, you can click the button as many times as you like until you receive one that suits your character. [chargen photo]
  
  Next to the name field, there is a drop-down menu for class. Select the desired class for your character, and choose carefully, because these classes will be used to influence your stats if you choose to randomly generate them. 

  Under attributes, you are given an entry form for each stat, or you can use the "Roll A Character" button if you'd like to randomly generate them based on the class you chose earlier. You may re-roll these attributes as many times as you'd like until you have the desired stats for your character. 

  Under Gear, you'll be shown a section for Weapon and Armor. Each of these pieces of gear can be manually created, or can be randomly generated with their respective "Randomize" buttons. Both Weapons and Armor are generated independently, and if you'd like to manually create one and randomize the other, you can choose to do so. 

  <img src="https://i.imgur.com/69iUru9.jpg" alt="character creation screen" height="400">



  ## View Your Heros
  Click the Fork That Orc titlecard at the top of the page to be taken to your character page, to see a list of all the heroes you've created. Within each card, you'll be shown the name of your hero, an icon representing which class they are, as well as their health and mana. At the bottom of each card is a "View" and "Delete" button. Click the "View" button to see a detailed card for your hero, which includes all other stats as well as their gear. Click the delete button to permanently remove the hero. **This cannot be undone, please make sure you're selecting the correct hero you wish to delete.**
  
  <img src="https://i.imgur.com/JGQ8Ipr.jpg" alt="character view screen" height="300">

  ## View All Heroes
  At the top of the page, you'll find a 'View All Heroes' button. Click it, and you'll see all the heroes in the application, including your own, as well as heroes created by other users. Use this for inspiration in creating your own heroes, or just to see what other types of characters are adventuring in the world. Click the "View" button at the bottom of any hero card to see their complete build with all stats as well as their equipment.
  
  <img src="https://i.imgur.com/t6DUyZi.jpg" alt="view all characters screen" height="300">

  ## Invert Colors
  There is an icon on the lower right of the screen with a sun/moon icon. Click this at any page to invert the colors of the page/navigation. Cards and details will not be inverted to preserve legibility of the printed information. 
  
  <img src="https://i.imgur.com/fnBv4gR.jpg" alt="inverted colors screen" height="300">

  
 # Credit
  Created by Cory Hall, Joel Hauser, Brian Ortiz, Trevor Tress, Austin Carter. 

  # License
  This project is covered under the gpl3.0 license. For more information, visit this [resource](https://choosealicense.com/licenses/) on project licenses.

  # Questions
  If you have any questions, you can find me on [github](https://github.com/cory-hall).
  

