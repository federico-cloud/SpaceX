import { Image } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";

import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetails';

import logo from './assets/SpaceX-logo.svg';

function App() {
 
  return (
    <>
      <Image src={logo} m={3} width='100%'/>
      <Routes>
        <Route path="/" element={<LaunchList/>} />
        <Route path="launch/:launchId" element={<LaunchDetails/>} />
        <Route path="rockets/:rocketId" element={<RocketDetails/>} />
      </Routes>
    </>
  )
}

export default App
