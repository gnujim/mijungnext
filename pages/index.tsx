import {
  Contact,
  Education,
  Employment,
  Header,
  Projects,
  Skills,
} from '../components'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import React from 'react'

const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    header: 'Playfair Display, serif',
    // body: ''
  },
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: 'url(/blob.svg)',
          height: '800px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Preflight />
        <Header />
        <Contact />
        <Employment />
        <Projects />
        <Skills />
        <Education />
      </div>
    </ThemeProvider>
  )
}
