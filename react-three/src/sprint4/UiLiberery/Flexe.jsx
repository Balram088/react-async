import { Button, Flex, HStack } from '@chakra-ui/react'
import React from 'react'

const Flexe = () => {
  return (
    <div>
      <Flex>
         <Button>Home</Button>
      </Flex>
      Flexe
      <HStack>
  <Button colorScheme='facebook' >
    Facebook
  </Button>
  <Button colorScheme='twitter' >
    Twitter
  </Button>
</HStack>
     <button>Home</button>
    </div>
  )
}

export default Flexe
