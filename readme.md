This project was created with [Create Next App](https://github.com/segmentio/create-next-app).

## Folder Structure

After creating an app, it should look something like:

```
.
├── readme.md
├──containers
   ├──RoomApp
      ├──RoomApp.js
      ├──RoomApp.css
├── components
│   ├── RoomList
    	|- RoomList.js
        |-- Room
	    |-Room.js
	    |-Room.css
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── home.js
    └── index.js
├── static
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/home.js` would map to `/home`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode
Open [http://localhost:3000] to view it in the browser.

The page will reload on making any edits.
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

Open [http://localhost:3000] to view the app in the browser.

### Using css

[next-css] 

Used the next-css package and added to the next-config.js file like this :-

#Install next-css

npm install --save @zeit/next-css

#Add this configuration in the next.config.js file

const withCSS = require('@zeit/next-css')
module.exports = withCSS()

#create a css file 'room.css'

.room {
    min-height: 100px;
    max-width: 220px;
    border: 3px solid #D3D3D3;
    border-radius: 6px;
    background-color: #D3D3D3;
    padding: 3px 3px;
}

#Import the css file in Room.js

Import "./room.css"

Usage :- <div className = "room"></div>

### Adding Components

We have a '/container' directory where we store container components. In this case our container component is 'RoomApp.js' which manages the state of our application

For all other components, we add them in '/components' directory.

For every component there is a folder with the component name and 'component.js' inside it.


