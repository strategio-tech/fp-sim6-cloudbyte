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
 <h2>MongoDB </h2>
 <p>Due to scalability, manageability and dynamic schemas, MongoDB has been used as the database for the application. Users, cafes and comments are stored in the cloud hosted MongoDB Atlas solution.</p>
 
<h2>Node.js/Express</h2>
<p>By implementing Express and Mongoose, we established a connection between the frontend and our MongoDB database, and defined the functionality of the APIs.  </p>
 
<h2>React</h2>
<p> React is used for the frontend. Hooks are used for data propagation, API calls, Prop management, and Conditional rendering among other functionalities.</p>
      
      
# Process for creating, designing, and maintaining software applications.

![Architecture](https://user-images.githubusercontent.com/38254701/213244438-3ac04594-3250-4c10-99bb-5df4c39f4399.jpg)

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

