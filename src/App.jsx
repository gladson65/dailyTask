import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Provider } from 'react-redux';
import taskStore from './utils/tasksStore.js';
import { useState } from 'react';

function App() {
 

  return (
    <>
      <Provider store={taskStore}>
        <Header />
        <Home />
      </Provider>
    </>
  )
}

export default App
