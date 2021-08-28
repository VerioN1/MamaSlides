import { Flex } from '@chakra-ui/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Other from './pages/Other/Other';

const App:React.FC = () => (
  <Flex height="100vh" width="100vw" bg={"gray.50"} overflow="hidden">
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/" component={Other}/>
      </Switch>
    </Router>
  </Flex>
);

export default App;
