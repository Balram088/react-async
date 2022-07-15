import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

const Flexe = () => {
  return (
    <div>
      <h1>Using Stack</h1>
      
      <Stack 
      sx={{border:"solid 1px black"}} 
      direction={{base:"column" ,md:"row"}} spacing="2rem"  >
        
        <Button>Home</Button>
         <Button>About</Button>
         <Button>Contact</Button>
      </Stack>
      <h1>Flex</h1>
      <Flex
          sx={{border:"solid 1px black"}} 
          direction={{base:"column" ,md:"row"}} bg="red"
          m="2" minWidth='max-content' alignItems='center' gap='23' >
      
         <Button  >Home</Button>
         <Button>About</Button>
         <Button>Contact</Button>
         <Spacer />
         <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
</ButtonGroup>

      </Flex>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  
</Flex>
    </div>
  )
}

export default Flexe
