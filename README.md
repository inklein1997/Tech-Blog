# TECH BLOG
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents
- [Description](#Description)
- [Links](#Links)
- [Technologies](#Technologies)
- [Screenshots](#Screenshots)
- [Installation Instructions](#Installation-Instructions)
- [User Instructions](#User-Instructions)
- [License](#License)
- [Contributors](#Contributors)
- [Contribution Instructions](#Contribution-Instructions)
- [Acknowledgements](#Acknowledgements)
- [Questions](#Questions)

## Description

**Tech Blog** is a full stack application that provides developers with the opportunities to create public posts regarding different opinions/facts about technologies they use.  Other developers will then have access to comment on these posts.  **Tech Blog** was created to facilitate discussion amongst other developers.

## Links
[URL to deployed application](https://blogyourtech.herokuapp.com/)<br>
[URL to GitHub repository](https://github.com/inklein1997/Tech-Blog)

## Technologies
![Javascript logo](/assets/img/javascript-logo.png)
![Handlebars logo](/assets/img/handlebars-logo.png)
![NodeJS logo](/assets/img/nodejs-logo.png)
![Sequelize logo](/assets/img/sequelize-logo.png)
![mySQL logo](/assets/img/mySQL-logo.png)
![CSS3 logo](/assets/img/css3-logo.png)
![Bootstrap logo](/assets/img/bootstrap-logo.png)

## Screenshots

## Installation Instructions

1. Since **Tech Blog** is primarily a NodeJS application, you must have NodeJS downloaded. Please download [here](https://nodejs.org/en/download/) if you have not done so previously.

<br>

2. To create and seed the database, you must have MySQL installed.  Please download [here](https://www.mysql.com/downloads/) if you have not done so previously.  To create and seed the company_db database, please follow these instructions...
<hr>
<br>

1. Log into MySQL into your command-line while be located in Employee-Tracker's repository.
```
mysql -u root -p
```
2. Once logged in, enter the following commands...
```
SOURCE main/db/schema.sql;
```
3. Exit the MySQL CLI by entering the following command...
```
quit
```

<hr>
<br>

3. Create a .env file and input the following information
```
DB_NAME=user_db
DB_USER={ENTER MYSQL USER HERE}
DB_PASSWORD={ENTER MYSQL PASSWORD HERE}
```

<br>

4. Install all necessary packages by typing in the following command into your command-line...
```
npm i
```
<br>

5. To seed the database with dummy data, please enter the following command in your command-line...
```
npm run seed
```
<br>

6. You are then able to run your server by entering the following command into your command-line...
```
npm start
```
OR
```
node server.js
```

## User Instructions

| Feature | Instructions |
| ----------- | ----------- |
| Login/SignUp | To have access to creating and editing posts, or post comments on existing threads, please sign in/create an account <br>*Note* You only have access to view threads without logging in. |
| Creating a Post | 1. **Click Dashboard** in the nav bar towards the top of the page <br>2. **Click Add Post** at the bottom of the dashboard <br>**Entered title and content** into their respective fields, and then **submit** |
| Update a Post | 1. To update one of your own posts, **visit your dashboard** <br>2.  **Click update button** and edit values within that field |
| Delete a Post | 1. To delete one of your own posts, **visit your dashboard** <br>2.  **Click delete button** to delete that post.  <br>*Note* This will delete any comments that are within the posts thread as well. |
| Comment on a Post | 1. You may comment on anyone's post by **navigating to the homepage** <br>. 2. Click the title of whatever post you would like to comment on <br>3. Enter comment and submit. |



## License

This project is licensed under the terms of [MIT](https://opensource.org/licenses/MIT).

## Contributors

[<img src="https://avatars.githubusercontent.com/u/93157433?v=4" width="75" height="75">](https://github.com/inklein1997)

## Contribution Instructions

Before contributing to **Tech Blog**, please read this [code of conduct](code_of_conduct.md)[^1].<br>
Here's how you can contribute...
1. Add issue or recommendation for improvement to Issues tab on Github.
2. Submit pull request for review.

## Acknowledgements
Original design of application originated from example given by the University of Texas at Austin BootCamp curriculumn

## Questions?

If you have any questions, please contact us via:

| Name | Github | Email |
| ----------- | ----------- | ----------- |
| Michael Klein | [@inklein1997](https://github.com/inklein1997) | michaelklein1997@gmail.com |

[^1]: Code of Conduct provided by [Contributor Covenant](https://www.contributor-covenant.org/)