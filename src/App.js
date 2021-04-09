import React,{useState} from 'react'
import Container from './Container'
import DropArea from './DropArea'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Itemtype from './Itemtype'
import store from './store'
import {Provider} from 'react-redux'
import HomePage from './HomePage';

const App = () => {    //app se  I'll call Homepage, on home page I'll call dummy cocmponent for all paths, from dummy component, I'll call
                        //container wrappped  in DnDProvider
  
  return (
    <Provider store={store}>
    <div className="App">
      <HomePage />
      {/* <DndProvider backend={ HTML5Backend } >
        <Container/>
      </DndProvider> */}
    </div>
    </Provider>
  );
}

export default App;