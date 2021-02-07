import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import "./App.css";

const Detail = () => {
  return (
    <div className="container">
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
      <section class="career-section mt-4">
        <div class="container">
          <div class="container-fluid">
            <div class="row">
              <div class="carrer-path-section">
                <div class="row">
                  <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h3 class="career-title">
                      Book a "Introductory Call" Session in minutes"
                    </h3>
                    <p>
                      If you're looking for a mentor, and you're just not sure
                      about how this all works – this should be for you. In a
                      casual, informal introductory call, a mentor will
                      introduce themselves, show you around the platform,
                      explain how our mentorships work and explain how they
                      would set up a mentorship with you. This session is
                      perfect if you're looking for a longterm mentor, but
                      you're just not sure how this can work – or if you already
                      set eyes on a specific mentor, and want to get to know
                      them beforehand.
                    </p>
                    <Button variant="primary mb-2">Reserve</Button>
                  </div>
                  {/* end of col */}
                  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <img
                      src="https://cdn.mentorcruise.com/img/undraw_unexpected_friends_tg6k.svg"
                      alt="student image"
                      class="img-fluid"
                    ></img>
                    {/* <img src="/cp-student.jpg" alt="student image" class="img-fluid"></img> */}
                  </div>
                </div>
              </div>
              {/* end of career path */}
              <div class="cp-form">
                <h5>Enter your details to reserve</h5>
                <form action="#" class="form-inline">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mr-4"
                      id="username"
                      placeholder="Enter your name"
                    />
                    <input
                      type="email"
                      class="form-control mr-4"
                      id="email"
                      placeholder="Enter your email"
                    />
                    <input
                      type="Number"
                      class="form-control mr-4"
                      id="email"
                      placeholder="Enter your phone number"
                    />
                    <Button variant="primary">Submit</Button>
                  </div>
                </form>
              </div>
              {/* end of cp-form */}
            </div>

            {/* end row */}
          </div>

          {/* container fluid */}
        </div>

        {/* container */}
      </section>
    </div>
  );
};

export default Detail;
