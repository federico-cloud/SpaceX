import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Box, Text, Flex, Spacer, Badge } from '@chakra-ui/react';

import * as API from '../services/launches';


export function LaunchDetails(){

    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
    }, [launchId]);


    return (

        <Box 
            bg="gray.400" 
            p={4} 
            m={4} 
            borderRadius="lg"
        >
            {!launch ? (
                <div>Loading...</div>
                ) : (
                <>
                  <Flex
                    alignItems="center"
                  >
                    <Text fontSize="2xl">
                      <strong>{launch.mission_name}</strong>
                    </Text>
                    <Spacer />
                    <Badge 
                        m={2}
                        p={2}
                        borderRadius='lg'
                        fontSize='xs'
                        colorScheme={launch.launch_success ? 'green' : 'red'}
                    >
                        {launch.launch_success ? 'Exitoso' : 'Fallido'}
                    </Badge>
                  </Flex>
                  <Box>
                      Cohete: <Link to={`/rockets/${launch.rocket?.rocket_id}`}> {launch.rocket?.rocket_name} </Link>
                  </Box>
                </>
            )}
        </Box>
    ); 

}