import { Box, Center, Flex, Grid, GridItem, Spacer, Square, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const ChakraSafes = () => {
  return (
    <div>
      <Box>
  <Flex direction={['column','row']}   color='white' Center>
  <Center h="200"  w='200px' bg='green.500'>
    <Text>NAV</Text>
  </Center>
  <Square h="200"  w='400px' bg='blue.500' >
    <Text>CONTENT</Text>
  </Square>
  <Box w='200px' h="200"  bg='tomato'>
    <Text>WIDGET</Text>
  </Box>
</Flex>
  



<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={`"header header"
  "nav nav"
  `}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
  <Spacer/>

  
  <Stack
  direction={['column','row']} 
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box w="200" h='40px' bg='yellow.200'>
    NAV
  </Box>
  <Box w="200" h='40px' bg='tomato'>
  CONTENT
  </Box>
  <Box w="200" h='40px' bg='pink.100'>
    WIDGET
  </Box>
</Stack>
</Box>

    </div>
  )
}
