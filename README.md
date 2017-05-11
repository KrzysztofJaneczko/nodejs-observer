# nodejs-observer

I created this tiny node.js app for fun, but later I realised it actually might come in handy to someone, so here it is.

## What does it do exactly?

It gets the html code from a webpage every minute and extracts the text from a certain element. If the data it got turns out different than a minute ago, it writes this information to a log file.

Currently, the app opens [http://www.nationaldebtclocks.org/debtclock/unitedstates](http://www.nationaldebtclocks.org/debtclock/unitedstates), extracts the amount of debt of the United States and saves it to a log file. I chose this kind of data because of its frequent changes, but you can observe whatever webpage you want.

## Requirements

All you need here is any recent version of **[node.js](https://nodejs.org/en/download/)**. I recommend the latest version anyway.

## Setup

Execute this in the main directory to get required dependencies:

    npm install

## Running

### Optional: set the port
The app runs on port 3000 by default but you can change it if you wish.

Windows:

    set APP_SERVER_PORT=5000

Linux and Unix:

    export APP_SERVER_PORT=5000

### Run

    npm start
This will use webpack to compile the code and will tell node.js to start the server.
