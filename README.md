<p><h1 align="center"> Brew List Coffee Social App </h1></p>
<a  href="https://deft-kataifi-43eda1.netlify.app/" style="text-decoration:none"> <p align="center">Life Is Better With Coffee </p></a>

![image](https://user-images.githubusercontent.com/105890888/211836025-68494da8-9a76-4be0-b204-d4e0ecb95eae.png)

<p align="center"> Brew List is a social media platform for coffee lovers where you can connect with trendy coffee shops in your
local area. Sign up and make friends, share your unique coffee experiences, discover new flavors by joining us
</p> 

# List of contents
<ol>
<li>Underlying technology</li>
<li>Key features</li>
<li>Requirements</li>
<li>Setting up locally</li>
</ol>

# Underlying technology
 
 <ul>
 <li>Node.js</li>
 <li>React.js</li>
 <li>Mongoose</li>
 <li>Express</li>
 <li>JavaScript</li>
 </ul>

# Key features
 <ul>
 <li>Users can create an account</li>
 <li>Users can set up profile, upload picture, write an about me</li>
 <li>Coffee shops can be filtered by City</li>
 <li>Users can leave reviewes on coffee shops</li>
 <li>Users can favorite coffee shops, favorites will show up under user profile</li>
 <li>Users can view other users profiles</li>
 </ul>
 
# Requirements      
 <p><h1>MongoDB </h1></p>
 <p>Utilizing Mongoose, we connect to MongoDB to store all information about the users, such as username, password, email and so, also to keep track of comments and     cafes.</p>
 
<p><h1>Node.js/Express</h1></p>
<p>By implementing Express and Mongoose, we established a connection between the frontend and our MongoDB database, and defined the functionality of the APIs.  </p>
 
<p><h1>React</h1></p>
<p> For the frontend, we use React. React Hooks were used to dynamically. The application has been separated into multiple different components to enhance organization and maintainability.</p>
      
      
# Process for creating, designing, and maintaining software applications.

![image](https://user-images.githubusercontent.com/105890888/211891873-058a50bb-89f6-4d72-9d27-66cd15ecf159.png)

# Hosting Services
<h2>Netlify</h2>
<p>Used to host the Client side of the project.</p> 

<h2>Cyclic</h2>
<p>Used to host the Server side of the project</p>

<h2>MongoDB Atlas</h2>
<p>Cloud hosted database for the project.</p>

<h2>Cloudinary</h2>
<p>Image hosting service used to host the profile images.</p>
<p>The images are encoded and stored in base64 format, the links to the images are stored in the database.</p>

# Run Project Locally 
<p>Clone the repository to your local machine, make sure to have node installed.
 <br>
For instruction on installing node refer to the link below.
</p>
<p>https://docs.npmjs.com/downloading-and-installing-node-js-and-npm</p>
<p>With node installed, follow instructions below to set-up the Client and the Server</p>

## Client 
<p>CD into the Client directory and run the below command to install the dependencies</p>

```bash
  npm install
```
<p>To start the client run below command from client root directory</p>

```bash
  npm start
```

The client will start and run on http://localhost:3000/


## Server 
<p>CD into the Server directory and run the below command to install the dependencies</p>

```bash
  npm install
```
<p>To start the server run below command from server root directory</p>

```bash
  node app.js
```

The server will start and run on http://localhost:3001/

