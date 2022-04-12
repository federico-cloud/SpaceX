import { Box, Flex, Text, Spacer, Button, Badge, Center} from '@chakra-ui/react';
import { AiTwotoneCalendar } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import 'dayjs/locale/es';

export const LaunchItem = (launch) => {
    
    return (
        
        <Box
            bg='gray.400'
            p={3}
            m={3}
            borderRadius='lg'
        >
            <Flex display='flex'>
                <Text fontSize='xl'>
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Center>
                    <Badge 
                        m={2}
                        p={2}
                        borderRadius='lg'
                        fontSize='xs'
                        colorScheme={launch.launch_success ? 'green' : 'red'}
                    >
                        {launch.launch_success ? 'Exitoso' : 'Fallido'}
                    </Badge>
                </Center>
            </Flex>

            <Flex align='center'>
              <AiTwotoneCalendar />
              <Text fontSize='sm' ml={1} color='gray.600'>
                {dayjs(launch.launch_date_local).locale('es').format('D MMMM, YYYY')}
              </Text>
            </Flex>

            <Link to={`/launch/${launch.flight_number}`}>
                <Button
                    mt={2}
                    colorScheme='blue'
                >
                    Ver detalles 
                </Button>
            </Link>
        </Box>
    )
}
