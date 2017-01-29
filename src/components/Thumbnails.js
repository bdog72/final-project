import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
export default class Thumbnails extends Component {
  render () {
    return <div>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail src='http://mississippiseafoodtrail.com/img/dinner-plate.png' width='200' height='200' />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail src='http://www.addictedtogrilling.com/sites/default/files/burger_works_386x311.jpg' width='200' height='200' />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail src='http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Chinese-Barbecue-Wings-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg' width='200' height='200' />
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail src='http://www.cicis.com/media/1138/pizza_trad_pepperoni.png' width='200' height='200' />
          </Col>
        </Row>
      </Grid>
);
    </div>
  }
}
