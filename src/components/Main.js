import React, { Component } from 'react'
import { Navbar, PageHeader } from 'react-bootstrap'
import Thumbnails from './Thumbnails'
export default class Main extends Component {
  render () {
    return <div>
      <PageHeader className='head'><p>Rest-au-rant</p></PageHeader>
      <Navbar className='nav' />
      <Thumbnails />
    </div>
  }
}