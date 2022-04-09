import { useEffect, useState } from 'react';
import { Heading, Image } from '@chakra-ui/react';

import { LaunchItem } from './components/LaunchItem';
import logo from './assets/SpaceX-logo.svg';
import * as API from './services/launches';

function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {

    API.getAllLaunches().then(setLaunches);
  
    return () => {
      second
    } 
  }, [])
  
 
  return (
    <>
      <Image src={logo} m={3} width='100%'/>
      <Heading as='h1'
        m={3} 
        size='lg'
        align='center'
      > 
        SpaceX Launches
      </Heading>
      <section>
        {launches.map( launch => (
          <LaunchItem key={ launch.mission_name } {...launch}/>
          ))}
      </section>
    </>
  )
}

export default App
