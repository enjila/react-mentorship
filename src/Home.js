import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./App.css";

const Home = () => {
  return (
    <div className="container pt-4">
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="/detail" className="text-light">
          Journey
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/home" className="text-light">
              <strong>Home</strong>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#get-started" className="text-light">
              <strong>Get Started</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <p className="text-center pt-4">
        Work with leading tech mentors and gain access to personalized guidance
        <br />
        to reach your potential. Ongoing sessions and expert advice, <br />
        on your terms, all for a flat monthly price.
      </p>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Your career goal here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <div className="bg-dark p-4 borderRadius">
        <Button variant="light mb-2">Front End Developer</Button>{" "}
        <Button variant="light mb-2">Back End Developer</Button>{" "}
        <Button variant="light mb-2">UI/UX Developer</Button>{" "}
        <Button variant="light mb-2">Designer</Button>{" "}
        <Button variant="light mb-2">Product manager</Button>{" "}
        <Button variant="light mb-2">Mobile App Developer</Button>{" "}
        <Button variant="light mb-2">React</Button>{" "}
        <Button variant="light mb-2">Data Scientist</Button>{" "}
        <Button variant="light mb-2">Analysts</Button>
      </div>
      <div class="container mb-4">
        <div className="row mt-4">
          <div class="col-sm">
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>
                  <strong>Introductory Call</strong>
                </Card.Title>
                <Card.Text>
                  If you're looking for a mentor, and you're just not sure about
                  how this all works – this should be for you. In a casual,
                  informal introductory call, a mentor will introduce
                  themselves, show you around the platform, explain how our
                  mentorships work and explain how they would set up a
                  mentorship with you.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>
                  <strong>CV Feedback</strong>
                </Card.Title>
                <Card.Text>
                  If you're looking for a mentor, and you're just not sure about
                  how this all works – this should be for you. In a casual,
                  informal introductory call, a mentor will introduce
                  themselves, show you around the platform, explain how our
                  mentorships work and explain how they would set up a
                  mentorship with you.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>
                  <strong>Work Review</strong>
                </Card.Title>
                <Card.Text>
                  If you're looking for a mentor, and you're just not sure about
                  how this all works – this should be for you. In a casual,
                  informal introductory call, a mentor will introduce
                  themselves, show you around the platform, explain how our
                  mentorships work and explain how they would set up a
                  mentorship with you.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-4">
          <div class="col-sm">
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>
                  <strong>Study Plan</strong>
                </Card.Title>
                <Card.Text>
                  If you're looking for a mentor, and you're just not sure about
                  how this all works – this should be for you. In a casual,
                  informal introductory call, a mentor will introduce
                  themselves, show you around the platform, explain how our
                  mentorships work and explain how they would set up a
                  mentorship with you.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>
                  <strong>Career Strategy</strong>
                </Card.Title>
                <Card.Text>
                  If you're looking for a mentor, and you're just not sure about
                  how this all works – this should be for you. In a casual,
                  informal introductory call, a mentor will introduce
                  themselves, show you around the platform, explain how our
                  mentorships work and explain how they would set up a
                  mentorship with you.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm">
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>
                  <strong>Interview Preparation</strong>
                </Card.Title>
                <Card.Text>
                  If you're looking for a mentor, and you're just not sure about
                  how this all works – this should be for you. In a casual,
                  informal introductory call, a mentor will introduce
                  themselves, show you around the platform, explain how our
                  mentorships work and explain how they would set up a
                  mentorship with you.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
