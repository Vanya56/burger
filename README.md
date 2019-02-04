# BURGER


This application allows you to add and then devour burgers, this app demonstrates my ability to use MySQL, ORMs, and the MVC model.

Click here to see the app in production on Heroku:

# Setup
* First clone this repo to your local directory.

* Next, navigate to your repo in your command terminal, and enter npm install.

* This will ensure you have all the necessary NPM packages installed to run this generator.


* You will likely be prompted for your credentials. Assuming you know your password for the connection, enter them now with host set to localhost or 127.0.0.1, password set to your password, and port set to 3306 or 3307.

* Next, navigate to the connection.js file, and in the connection variable (defined at the top of these files), enter in your password in the password property of the object in the ''.

# Overview
This is a single page application.

Add a burger by typing into the text box and clicking submit. This will add a burger to the list on the left side of the screen, along with a devour button. Clicking the devour button will then move the burger to the right side of the screen.

On the backend, these actions translate into creations and updates to data in the SQL database.