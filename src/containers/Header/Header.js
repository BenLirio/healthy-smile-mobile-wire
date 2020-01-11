import React, { Component } from 'react'
import classes from './Header.module.scss'
import TopBar from '../../components/TopBar/TopBar'

export default class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <TopBar />
      </div>
    )
  }
}
