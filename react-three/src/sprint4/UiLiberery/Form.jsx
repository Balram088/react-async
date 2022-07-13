import React from 'react'
import { Box, Button, Heading, Input, PinInput, PinInputField, Stack } from "@chakra-ui/react";

const Form = () => {
  return (
    <div>
    <Box >
       <Heading>Form</Heading>
       <Stack direction="column" gap="0.5rem">
       <Box><Input type="email"  placeholder='Email'/></Box>
       <Box><Input type="password" placeholder='password' /></Box>
       <Box><Button>Sign up</Button></Box>
      <Box>
         <PinInput size='ms'otp>
        <PinInputField/>
       <PinInputField/>
       <PinInputField/>
       <PinInputField/>
       </PinInput>
       </Box>
       </Stack>
    </Box>
    </div>
  )
}

export default Form