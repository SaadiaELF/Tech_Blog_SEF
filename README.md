# Tech_Blog_SEF [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
-----------------------------------------------------------------------------------------------------------------------
Table of content :

* [Purpose](#Purpose)
* [Method](#Method)
* [Node.js](#Nodejs)
* [JavaScript](#JavaScript) 
* [Handlebars.js](#Handlebarsjs) 
* [Demonstration](#Demonstration)
* [URLs](#URLs) 

-----------------------------------------------------------------------------------------------------------------------

## Purpose

The main purpose of this project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is completely built from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.  

-----------------------------------------------------------------------------------------------------------------------

## Method

This application is created using the following languages, libraries and software.

    * Node.js
    * Handlebars.js
    * Javascript 
    * VS Code
    * Github
   
-----------------------------------------------------------------------------------------------------------------------

## Nodejs
    
This open-source back-end JavaScript runtime environment is used to invoke the application using the following commands :

    * npm init -y : to initialize node
    * nmp i mysql2: to install the mysql2 package
    * nmp i express : to install the express package
    * nmp i dotenv : to install the dotenv package
    * nmp i sequelize : to install the sequelize package
    * nmp i express-session : to install the express-session package
    * nmp i connect-session-sequelize : to install the connect-session-sequelize package
    * nmp i bcrypt : to install the bcrypt package
    * nmp i express-handlebars : to install the express-handlebars package
    * node seeds/seed.js OR npm run seed : to seed the database 
    * node server.js OR npm start : to listen to the server

-----------------------------------------------------------------------------------------------------------------------

## JavaScript 

This programming language is used to create :

    * config/connection.js : creates connection to the database
    * Controllers directory : holds all the routes to perform create, read, update, and delete operations using Sequelize models
    * Models directory : holds the models an their association methods 
    * Public/js directory : holds all the static js files
    * Utils directory : holds the helpers functions and the authentication function
    * Seeds directory : holds seeds files for each model
    * server.js : Connects to the server
-----------------------------------------------------------------------------------------------------------------------

## Handlebarsjs

This simple templating language used to generate HTML files . The directory views holds :

* layouts : the main website layout
* partials : templates that are called directly by other templates
* Website pages

-----------------------------------------------------------------------------------------------------------------------

## Demonstration

![Demo](./assets/demo.gif)

-----------------------------------------------------------------------------------------------------------------------

## URLs

* The URL of the GitHub repository: https://github.com/SaadiaELF/Tech_Blog_SEF.git
* The URL of the deployed application : https://tech-blog-sef.herokuapp.com/

-----------------------------------------------------------------------------------------------------------------------
