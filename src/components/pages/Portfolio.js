import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mixapp from '../images/appscreenshot.png'
import pwa from '../images/jatess.png'
import socialss from '../images/socialapiss.png'
import readme from '../images/readmess.png'
import notetaker from '../images/notetakerss.png'
import ecommerce from '../images/ecommercess.png'

const style = {
  text: {
    color: 'black'
  }
}
function Portfolio() {
  return (
    <Container>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src={pwa} />
            <Card.Body>
              <Card.Text style={style.text}>
                PWA Text Editor: an in-browser note taking app built using Webpack, Workbox, and IndexedDb.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src={socialss} />
            <Card.Body>
              <Card.Text style={style.text}>
                Social Api: a theoretical back end for a social network, where users can share thoughts and reactions. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src={ecommerce} />
            <Card.Body>
              <Card.Text style={style.text}>
                E-Commerce Backend: this project provides routes, models, and uses MySQL to simulate inventory for a business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src={notetaker} />
            <Card.Body>
              <Card.Text style={style.text}>
                Note-Taker: This is a deployed website that works as a note organizer, allowing you to add tasks, lists or information that you can add, save, or delete as needed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src={readme} />
            <Card.Body>
              <Card.Text style={style.text}>
                ReadMe Generator: this app uses the inquirer package to generate a "readme.md" file for your future projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Img variant="top" src={mixapp} />
            <Card.Body>
              <Card.Text style={style.text}>
                Mix&Fix Recipe App: A group project I contributed to using 3rd party APIs to help indecisive people figure out meals and cocktails based on their own ingredients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default Portfolio;

<Card>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text style={style.text}>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
