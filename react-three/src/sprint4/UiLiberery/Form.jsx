import React from 'react'
import { Box, Button, Heading, Input, PinInput, PinInputField, Stack } from "@chakra-ui/react";
import { useState } from 'react';

const Form = () => {
  const [otp, setOtp ] = useState(" ");

  return (
    <div>
    <Box size="md" >
       <Heading>Form</Heading>
       <Stack direction="column" gap="0.5rem">
       <Box><Input type="email"  placeholder='Email'/></Box>
       <Box><Input type="password" placeholder='password' /></Box>
       <Box><Button>Sign up</Button></Box>
      <Box>
         <PinInput  value={otp} onChange={(value) => setOtp(value)}  otp>
        <PinInputField/>
       <PinInputField/>
       <PinInputField/>
       <PinInputField/>
       </PinInput>
       <h2>{otp}</h2>
       </Box>
       </Stack>
    </Box>
    </div>
  )
}

export default Form