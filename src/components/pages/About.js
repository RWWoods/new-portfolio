import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import upennBanner from '../images/upenn.jpeg'
import appleStore from '../images/apple_store.png'
import kzoo from '../images/kzoo.png'

const styles = {
  upennBanner: {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  appleStore: {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    marginLeft: '350',
    marginRight: '350',
  },
  body: {
    background: "#4287f5",
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

export default function About() {
  return (
    <container className="justify-content-md-center">
    <Row xs={1} md={1} className="justify-content-md-center">
          <Card style={styles.body}>
            <Card.Img variant="top" src={upennBanner} style={styles.upennBanner} fluid />
            <Card.Body style={styles.card}>
              <Card.Title>Software Experience</Card.Title>
              <Card.Text>
              I am a recent graduate from the University of Pennsylvania Full Stack Coding Bootcamp. I have experience with HTML, CSS, JavaScript, jQuery, mySql, Nodejs, Jest, MongoDb, Express, and React. I have worked both individually and within unique groups to create and deploy full stack applications. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={appleStore} style={styles.upennBanner} />
            <Card.Body>
              <Card.Title>Previous Employment</Card.Title>
              <Card.Text>
              Before I started to learn software development, I worked at Apple for five years working my way up to a Genius role technician. I worked daily with people from all walks of life, and learned valuable interpersonal skills that help me work with and get along with almost anyone; furthermore, I developed excellent troubleshooting skills and familiarity with computer and mobile hardware and repairs.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={kzoo} />
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
              I graduated from Kalamazoo College in 2018 with a degree in Classics, after following my passion for language and fascination with the ancient world. I enjoyed the puzzle-like aspects of translating Latin and Ancient Greek poetry and found a love for communication.
              </Card.Text>
            </Card.Body>
          </Card>
    </Row>
    </container>
  );
}





// I am a recent graduate from the University of Pennsylvania Full Stack Coding Bootcamp. I have experience with HTML, CSS, JavaScript, jQuery, mySql, Nodejs, Jest, MongoDb, Express, and React. I have worked both individually and within unique groups to create and deploy full stack applications. 
// <br></br>
// Before I started to learn software development, I worked at Apple for five years working my way up to a Genius role technician. I worked daily with people from all walks of life, and learned valuable interpersonal skills that help me work with and get along with almost anyone; furthermore, I developed excellent troubleshooting skills and familiarity with computer and mobile hardware and repairs.
// <br></br>
// I graduated from Kalamazoo College in 2018 with a degree in Classics, after following my passion for language and fascination with the ancient world. I enjoyed the puzzle-like aspects of translating Latin and Ancient Greek poetry and found a love for communication.