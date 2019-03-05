# Take-Home - SPA

## Getting things up and running
- Install Node v10
    - [Node](https://nodejs.org/en/download/) 
- Clone this repoistory
  - ```git clone git@github.com:100health/take-home.git```

- Running the server and frontend

```
    $ cd take-home
    $ npm install
    $ npm run migrate:up
    $ npm run seed
    $ npm run start:server
```

## Routes 

- API Server routes for Sources and Messages

```
    localhost:8888/source  (GET, POST)
    localhost:8888/source/:id (GET, PUT)
    localhost:8888/source/:id/message (GET)
    localhost:8888/message (GET, POST)
    localhost:8888/message/:id (GET, PUT)
```

## Take Home Assessment
You are working with a complicated network of nodes that send messages between each other. One common type of node in this network is a source who will generate messages to be transmitted to another node on the network. You need the create a view or series of views that allows a user to view a particular source and its messages. This is a highly simplified version of what the Redox engine dashboard current does.

Your take home assessment will be to create a front end application and supporting backend API to fetch and view of the sources and messages in the network. There is a repo that will serve as a starting point that contains all the data to use as mock data for sources and message.

### Backend API that will be able to..
Feel free to create and modify backend API endpoints and handlers. 

### Given this API create a front end view that…
1) Allow a user to view all sources
2) Allows a user to view a single source 
   - With more details about the source
   - All the messages for that source
   - An element that displays the aggreate status of messages for a particular source (error, enqueued, finished, processing).

The expected time commitment for this activity is around 4 hours. If you find yourself getting far beyond this number, stop, commit what you have, and we can pick it up from there. If you have any questions or suggested improvements, reach out!
