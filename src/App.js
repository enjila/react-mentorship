import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>
                          <a href="" target="_blank">
                            Search
                          </a>
                        </h1>
                        <h1>Career Pathway</h1>
                        <h1>
                          <a href="" target="_blank">
                            Search your roles for quicker response
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h2>Tell me about yourself</h2>
                        <h5>Experience Level</h5>
                        <h5>Degree</h5>
                        <h5>Skills</h5>
                        <h5>Work Rights</h5>
                        <h5>Location</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
