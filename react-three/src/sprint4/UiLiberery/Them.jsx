import React from 'react';
import {SunIcon , MoonIcon} from "@chakra-ui/icons"
import {
  Button, Center, IconButton, Stack, Text, useColorMode
} from "@chakra-ui/react";




const Them = () => {
 const {colorMode , toggleColorMode} = useColorMode();

return (
    <>
     <Center h="100vh" maxW="1200px" mx="auto">
      <Stack isInline>
       <IconButton
       icon={colorMode==="light"?<MoonIcon/>:<SunIcon/>}
       variant="outline"
       colorScheme="cyan"
       aria-label='Color mode switcher'
       onClick={toggleColorMode}
       >
        Switch Mode
       </IconButton>
       <Button
       variant="solid" 
       colorScheme="blue"
       >Theme1</Button>
        <Button
       variant="solid" 
       colorScheme="red"
       >Theme2</Button>
     
      </Stack>
     </Center>
    </>
  )
}

export default Them
