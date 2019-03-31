# Take-Home - SPA

Sample application project.

# Implementation notes

## To do

- Replace sample tokens with OAuth 2.0
- Security audit
- Regulatory compliance audit
- SSL (both client and server)
- Tighter CORS settings
- Code review
- Automate deployment
- Move hardcoded values to configuration
- Styling / UX / responsive design
- Accessibility
- Progress indicators
- Pagination
- Improved filtering / searching
- Error handling / display / logging
- Better middleware
- Auditing (if appropriate)
- Monitoring support (ping endpoint, etc.)
- Date/time display in local time (if appropriate)
- Internationalization (if required)
- Improve test coverage
- End-to-end and performance tests
- Load testing
- Performance tuning (if necessary)
- Caching
- Handle large numbers of messages
- Browser compatibility testing

Large volumes of messages *will* be an issue. Without seeing actual data it is difficult to determine what filters/searches are most appropriate. Something like [Elasticsearch](https://www.elastic.co/products/elasticsearch) might be appropriate.

Note that, as per the specifications, the API supports features that are not surfaced in the UI. Whether or not deletes should cascade is an open question.

## Technical details

The client app is built with [React](https://reactjs.org/) and [Redux](https://redux.js.org/). It uses [Hooks](https://reactjs.org/docs/hooks-overview.html).

The HTTP API is built with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/). JWTs are used for basic security.

To test:

- cd to messaging to test the app, or messaging-api to test the API
- `yarn test`
- `a` to run all tests

To run:

- cd to messaging-api
- `yarn start`
- cd to messaging
- `yarn start`

In both cases you may need to edit the database path in 
messaging-api/persistence/repository.js (in the `open` function; line 11 currently) first - I had issues getting that to work with a relative path.

## Browser support

Supports modern browsers (not tested in Internet Explorer; actually only tested in Chrome).

Copyright &copy; 2019 William E. Sorensen. All rights reserved.

---

# Original requirements

## Getting things up and running

- Clone or [fork](https://help.github.com/en/articles/fork-a-repo) this repoistory
  - ```git clone git@github.com:100health/take-home.git```

- Use tools of your choice to interact with the SQLite database (`db.sqlite`)
    - The database consists of only two tables: `source` and `message`

## Take Home Assessment
You are working with a complicated network of nodes that send messages between each other. One common type of node in this network is a source who will generate messages to be transmitted to another node on the network. You need the create a view or series of views that allows a user to view a particular source and its messages. This is a highly simplified version of what the Redox engine dashboard current does.

Your take home assessment will be to create a front end application and supporting backend API to fetch and view the sources and messages in the network. There is a repo that will serve as a starting point that contains all the data to use as mock data for sources and message.

### Backend API 
Given this data create a backend API that will be able to.

1) Fetch all sources and their basic information
2) Fetch a single source’s information in greater details
3) Fetch all messages for a single source
4) Ability to CRUD source information

Here is the basic API backend route structure we want to see:  
```
    localhost:8888/source  
    localhost:8888/source/:id
    localhost:8888/source/:id/message
    localhost:8888/message
    localhost:8888/message/:mid
```

### Given this API create a front end view that…
1) Allow a user to view all sources
2) Allows a user to view a single source 
   - With more details about the source
   - All the messages for that source
   - An element that displays the aggregate status of messages for a particular source (error, enqueued, finished, processing).

The expected time commitment for this activity is around 5-10 hours. If you find yourself getting far beyond this number, stop, commit what you have, and we can pick it up from there. If you have any questions or suggested improvements, reach out!

### Submission 

1) Send us a link to the forked repo on your personal GitHub account.
2) Zip/Tar the contents of your final project directory and send it to us via a Dropbox or Google Drive link.  
