import React from 'react';
import InputFormContainer from './Calculator'
import ModalContainer from './ModalContainer'
import MenuBar from '../components/MenuBar'

const App = () => (
  <div className="App">
      <MenuBar />
      <div className="main-page">
        <InputFormContainer />
      </div>
      <ModalContainer />
  </div>
)

export default App;
