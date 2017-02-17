import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'
import Thumbnails from './Thumbnails'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router'
export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <PageHeader className='head'>
        {/* <p>Rest-au-rant</p> */}
        {/* <Button size='huge'> */}
        <Menu.Item className='menu1'as={Link} to='/'><p>Rest-au-rant</p></Menu.Item>
        {/* </Button> */}
      </PageHeader>
      <Thumbnails />
      <main>
        {this.props.children}
      </main>
    </div>
  }
}
