import React from 'react'
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const customThem = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'red',
    components: ['Button', 'Badge'],
  }),
  withDefaultColorScheme({
    colorScheme: 'blue',
    components: ['Alert', 'Table'],
  }),
)
const Them = () => {
  return (
    <div>
      <customThem>
        <h1>Hello</h1>
      </customThem>
    </div>
  )
}

export default Them
