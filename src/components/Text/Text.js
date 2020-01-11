import React from 'react'
const styles = {
  headline1: {
    fontSize: '6rem',
    fontWeight: '300',
    letterSpacing: '-0.09375rem',
    lineHeight: '6rem',
  },
  headline2: {
    fontSize: '3.75rem',
    fontWeight: '300',
    letterSpacing: '-0.03125rem',
    lineHeight: '3.75rem',
  },
  headline3: {
    fontSize: '3rem',
    letterSpacing: '0',
    lineHeight: '3rem',
  },
  headline4: {
    fontSize: '2.125rem',
    letterSpacing: '0.015625rem',
    lineHeight: '2.125rem',
  },
  headline5: {
    fontSize: '1.5rem',
    letterSpacing: '0',
    lineHeight: '1.5rem',
  },
  headline6: {
    fontSize: '1.25rem',
    letterSpacing: '0.009375rem',
    fontWeight: '500',
    lineHeight: '1.25rem',
  },
  body1: {
    letterSpacing: '0.03125rem',
  },
  body2: {
    fontSize: '0.875rem',
    letterSpacing: '0.015625rem',
    lineHeight: '0.875rem',
  },
  subtitle1: {
    letterSpacing: '0.009375rem',
  },
  subtitle1: {
    fontSize: '0.875rem',
    letterSpacing: '0.00625rem',
    lineHeight: '0.875rem',
  },
  overline: {
    fontSize: '0.625rem',
    letterSpacing: '0.09375rem',
    lineHeight: '0.625rem',
    textTransform: 'uppercase',
  },
  button: {
    fontSize: '0.875rem',
    letterSpacing: '0.078125rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: '0.875rem',
  },
  caption: {
    fontSize: '0.75rem',
    letterSpacing: '0.025rem',
    lineHeight: '0.75rem',
  },
}
export default function FontFace(props) {
  return (
    <p style={props.type ? styles[props.type] : styles.body1}>
      {props.children}
    </p>
  )
}
