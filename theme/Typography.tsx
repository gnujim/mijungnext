import { x } from '@xstyled/styled-components'
import { FunctionComponent } from 'react'

// Name H1
// Section header H2
// border bottom
// Subheader H3
// regular body1
// Subtitle

export enum FontType {
  Header = 'header',
  Body = 'body',
}

interface TypographyProps {
  fontType: FontType
}

export const Typography: FunctionComponent<TypographyProps> = (props) => {
  const { children, fontType } = props

  const getFontStyles = (
    fontType: FontType
  ): Record<string, string | number> => {
    switch (fontType) {
      case FontType.Header:
        return {
          fontFamily: 'Playfair Display, serif',
          fontSize: '55px',
          fontWeight: 700,
          color: '#fff',
        }
      case FontType.Body:
        return {
          fontFamily: 'Cutive Mono, monospace',
          fontSize: 'lg',
          fontWeight: 400,
          color: '#fff',
        }
      default:
        return {
          fontFamily: 'Cutive Mono, monospace',
          fontSize: 'lg',
          fontWeight: 400,
          color: '#000',
        }
    }
  }

  return <x.p {...getFontStyles(fontType)}>{children}</x.p>
}
