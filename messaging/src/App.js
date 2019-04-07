import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Sources from './Sources/SourcesContainer';
import SourceDetail from './Source/SourceDetailContainer';
import EditSource from './Source/EditSourceContainer';
import Messages from './Messages/MessagesContainer';
import CreateSource from './Source/CreateSource';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Messaging</h1>
        <Link to="/">Home</Link>
        <Route path="/" exact component={Sources} />
        <Route path="/createSource" component={CreateSource} />
        <Route
          path="/source/:sourceId"
          exact
          render={props => (
            <SourceDetail sourceId={props.match.params.sourceId} />
          )}
        />
        <Route
          path="/source/:sourceId/edit"
          render={props => (
            <EditSource sourceId={props.match.params.sourceId} />
          )}
        />
        <Route
          path="/source/:sourceId/messages"
          exact
          render={props => <Messages sourceId={props.match.params.sourceId} />}
        />
        <Route
          path="/source/:sourceId/messages/:status"
          render={props => (
            <Messages
              sourceId={props.match.params.sourceId}
              status={props.match.params.status}
            />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
