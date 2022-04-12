import { useEffect, useState } from 'react';
  import { Heading, Spinner, Flex, Box } from '@chakra-ui/react';

import { LaunchItem } from './LaunchItem';

import * as API from '../services/launches';


export const LaunchList = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
  
      API.getAllLaunches().then(setLaunches).catch(console.log);
    
    }, [])

    return (
      <>
        <Heading as='h1'
          m={3} 
          size='lg'
          align='center'
        > 
          SpaceX Launches
        </Heading>
        {launches.length === 0 ? (
          <Flex
            flexDirection='column'
            w='100%'
            h='80vh'
            alignItems='center'
            justifyContent='center'
          >
            <Spinner size='xl'/>
            <Box>Cargando...</Box>
          </Flex>
          ) : (
          <section>
            {launches.map((launch) => (
              <LaunchItem key={launch.flight_number} {...launch} />
            ))}
          </section>
        )}
      </>
    )
}
