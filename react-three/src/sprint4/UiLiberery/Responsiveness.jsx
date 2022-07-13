import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Responsiveness = () => {
  const arr=[1,2,3,4,5,6,7,8,9,0]
    return (
    <div>
        <Box>
        <SimpleGrid columns={[2,3,4]}>
          {arr.map((item) => (
            <Box bgColor="red" margin="10px" key={item}> {item}</Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Responsiveness



