import { x } from '@xstyled/styled-components'
import { FunctionComponent } from 'react'
import { FontType, Typography } from '../theme'

export const Header: FunctionComponent = () => {
  // Name, Contact, About Me
  return (
    <x.div padding={10}>
      <Typography fontType={FontType.Header}>Mijung Lee</Typography>
      <x.div maxWidth={500}>
        <Typography fontType={FontType.Body}>
          As a developer with a keen eye for detail, I am committed to crafting
          an intuitive user experience, with the use of practical,
          well-encapsulated code. I am self-motivated, adept at problem solving,
          and an quick learner.
        </Typography>
      </x.div>
    </x.div>
  )
}
