For the unit CPS1015 Web Development Foundations, I have created a webiste to mimic that of a national sports federation, with my preference of karate.
This website provides users with multiple functionalities, mainly considering, applying for competitions, creating your athlete profile, displays athlete rankings, displaying meaningful information and documnets. Furthermore, other smaller functionalities are also implemented and can be explored throguh utilisation.

____________________________________________________________
How to install and handle dependencies on set up:

Kindly download the zip file named "Julian Mifsud 0353907L - WebDev" and extract all files and folders.
Open the command prompt (on windows) or which ever applicable terminal acting as a command line interface.
In the terminal type "cd " followed by the file path ending with "\Karate" and enter the command.

-Node-
In the terminal type "node --version"
If node is already installed at version 18.0.0 or higher than it is installed correctly
If not installed or version is outdated, go to the official Node.js website and install the latest version
Reverify with "node --version" being higher than 18.0.0 and "npm --version" being higher than 11.0.0

-Other Dependencies-
For this project you will also need to install these packages for the following dependencies
The folder "node_modules" is already provided in the zip file so run "npm list express node-fetch" in the terminal to check wether the libraries express and node-fetch have been obtained correctly at versions 5.2.1 and 3.3.2 respectively.
If this fails enter "npm install" to install the libraries express and node-fetch and all sub-dependencies into a new folder node_modules


Finally enter "npm start" to start the server running locally and press Ctrl+Click on the link provided to open the website from your local host.

Later to terminate the server's session, press Shift+C in the terminal and enter "Y".

____________________________________________________________
API usage

If server is already running on the local host
URL: http://localhost:3000/api/fighters
Otherwise by public link
URL: https://public-api.karate.com/api/fighters

From this api, I will be accesing the attribute considering,
category to filter,
weightClass to distribute items and
bodyImage.url, ranking and fullName to display the athlete's details.

This selection was done since other variables were very inconsistent with many instances of most remaing variables not being assigned any data.
Furthermore, the interpretation of ranking was changed to be used as Titles Won since there were duplicate values in certain weight classes. Other apis proved to have less sufficient data so this alteration is fitting.

____________________________________________________________
My github repository can be viewed from the following link
https://github.com/Breezite/WebDev.git

Personally I've never used github for collaboration or distribution so if any issues arrise feel free to reach out and I will be happy to provide.
Small issue with github sequence of commits as accidentally branched at a point.

____________________________________________________________
Written Reflection

I chose this topic as I am very passionate and involved in my karate career. Therefore, I am in touch with what athletes like myself will want and expect from a website from the national federation. Of course since the project regards a subject of interest, allows greater contribution, attention to detail and eagerness to complete the task. I would like to mention that I have already had experience making websites during the past summer, so fortunately for me I already had a strong basis of html, css, js and node but still had to expand my knowledge when considering new concepts.

Progress and development started off a little late in the semester and in small incremental parts as no dedicated time periods were allocated for the assignment. Altough so, it gave a better foundation when the deadline was nearing.
Initially inspiration regarding styling, structure, order and functionality were being taken from other websites as can be viewed in the Blueprint.txt file. This was used to plan the structue until solidified, as it was subject to change through out development.

First an overall structure was deduced with the header and navigation bar applying the porper css which was needed for adequate display. The drop down menu was a tedius task especially to create the pointer above the dropdown. Thankfully managed after a lot of css manipulation and testing.

Reading through the requirements, node seemed to be through what our files and packages should run. Therefore this was easily implemented. The use of api was heavily utilised for the script.js file linked to the ranking.html. At this point in development, extensive hours were dedicated to these aspects. To implement api checks, fail cases and properly obtaining and parsing the JSON data in the first place. Not particularly too difficult to handle the api, it was more a matter of getting familiar with the new syntax and how to handle the data.
Development of the script handling the api went through a few stages.
Initially obtaining the api data, manipulating it and dynamically building the page's tables as specified in the assignment brief.
Since athletes can compete in more than one category, this was an issue creating minor complicatoins in the js code. This hurdle was also overcome.
When including the fighter's image, a slight alteration was needed as the url was being read as undefined, thus storing the image as an object and displaying that instead. (This aspect and the tables css was included towards the end of the project.)
Furthermore, the ranking.html page was made to allow easy browsing between different categories with the use of the buttons, acting as their own navigation bar so to speak. These are what triggered the script.js file to reload the tables when needed.

