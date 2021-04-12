import React from 'react'
import Container from './Container'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import store from './store'
import {Provider} from 'react-redux'
import HomePage from './HomePage';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import CallingPage from './CallingPage'

const App = () => {    //app se  I'll call Homepage, on home page I'll call dummy cocmponent for all paths, from dummy component, I'll call
                        //container wrappped  in DnDProvider
  
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:id' component={CallingPage} />
                {/* <HomePage /> */}
        </Switch>
      </Router>
      {/* <DndProvider backend={ HTML5Backend } >
        <Container/>
      </DndProvider> */}
    </div>
    </Provider>
  );
}

export default App;