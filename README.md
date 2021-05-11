# Real-Time-Chat-App

## App made with MERN stack and Socket.io

if you would like to clone the app make sure to add ```.env``` file and add the following:

```
PORT = ####,
NODE_ENV = development/production
MONGO_URI = make a user on mongodb.com  
JWT_SECRET = (Your choice of either words/letter or mix of both. Not recommended more than 12 characters)
``` 

![Screenshot from 2021-05-11 11-36-07](https://user-images.githubusercontent.com/56390606/117785473-497bad00-b24d-11eb-94c6-94ab856f83c8.png)


Demo of the App can be found here: https://chatify-application.herokuapp.com/

## :floppy_disk::package: Installing locally :

1. clone this repo.
2. cd into the cloned repo.
3. In the terminal run: npm i (make sure to do the same for client)
4. update ```.env``` folder with your values
5. In the terminal run: npm run dev 
6. The server is now running at localhost:3000
7. Open localhost:3000 in your browser!

---

## :construction_worker: :construction:   In the works

### Currently working on
- Users be able to create a chatroom page :heavy_check_mark:
- Adding More functionality to socket.io

# :fast_forward: future goals

### Future goals

- User can update his profile
- Re-Do the style for Chatroom Screen
- Admin Panel for Updating/Deleting Users/Rooms
