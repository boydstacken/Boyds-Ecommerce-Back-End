# Boyd's Ecommerce-Back-End

## Description

The motivation to for this application was to build the back end for an e-commerce site. With configuring to a working Express.js API to use Sequelize to interact with a MySQL database, that is very relevant in today's e-commerce platforms like Shopify and WooCommerce. This helps us understand structure of these platforms with becoming a full-stack web developer.

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)

## Installation

Do a npm install in the terminal to get all the npm packages.

With your .env file, make sure it's a part of your app and your own db name, and your mySQL credentials. Sequelize will also be utilized to connect to your database to help configure and execute your schema and commands. Development database will eventually be created and seeded.

Get models set up with the appropriate fields per the requirements of each model itself, so all relevant data will be displayed as JSON when testing the application in Insomnia. 

Create your routes and tie back to the models and additional requirements so we can make calls/requests to GET, POST, CREATE, UPDATE, AND DELETE as we need to while using this application.

Use Insmonia to test your routed and the JSON data field within it to properly execute the desired implementations. 

## Usage

Here's a quick video link on how to use this application: https://drive.google.com/file/d/1bM3RO8obcToAvhzNpBu80AZgSkpF7w3O/view

Add your database name, MySQL username, and MySQL password to an environment variable file. Once you complete that connect to a database using Sequeliza, enter your schema and seed commands. As a result, the developement database is created and seeded with test data. 

Enter your command to invoke the application to start your server and the sequelize models will be synced to the MySQL database. After you open API GET routes in Insomnia for categories, products, or tags your data for each route will be shown in a formatted JSON. Then you will test the API POST, PUT AND DELETE routes in Insomnia to successfully create, update and delete in your database.

## Credits

Boyd Stacken
Github Profile: https://github.com/boydstacken

## License

n/a

## Questions

If you have any questions about this Ecommerce Back End Application, please contact boydstacken@icloud.com with any futher inquiries.

## Video Tutorial

Here is the link with the tutorial on how to use this aplicaiton: https://drive.google.com/file/d/1bM3RO8obcToAvhzNpBu80AZgSkpF7w3O/view

