Give it a try here: <a href="https://strive-talk.herokuapp.com/">Strive Talk</a>

<h1>Strive Talk</h1>

Strive Talk is a message board where you can view messages, but only members and administrators are able to create them. This application is built with NodeJS, Express, Pug, Mongoose, MongoDB and Passport for authentication.

## How It Works

<ol>
    <li>When a post request is made to the "/sign-up" path to create a new user, bcryptjs takes the password and hashes/salts it before the user is created and added to the database. </li>
    <li>When a post request is made to the "/log-in" path to log a user in, passport.js is used to authenticate the validity of the request.</li>
    <li>Certain limitations are placed depending on if you are not logged in, have member status or have admin status.</li>
    <ul>
        <li>Not logged in: Unable to post messages, also unable to see username and date of posted messages.</li>
        <li>Members: Are able to post new messages as well as see the username and date for all posted messages.</li>
        <li>Admin: Admins have all of the previous privileges but also have the ability to delete messages.</li> 
    </ul>        
</ol>

<p align="center">
    <img src="/public/images/striveTalkPreview.png" width="1000" title="Strive Talk Preview">
</p>

Testing done with Jest and Cypress.

- This test signs up a user, logs them in, obtains admin access and ultimately posts a message to the board.

![cypress testing](https://i.imgur.com/FFuFmJ8.gif)



👤 **Keffri Neal**

- LinkedIn: [@keffri](https://www.linkedin.com/in/keffri/)
- Github: [@keffri](https://github.com/keffri)
