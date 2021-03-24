import logo from "./logo.svg";
import "./App.css";
import { Button, FormControl, InputGroup, Card } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <div>
      <section class="career-section">
              <div class="container">
              <div class="container-fluid">
                <div class="row">
                <div class="carrer-path-section">
                <div class="row">
                  <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <h3 class= "career-title"> What is Lorem Ipsum?</h3>
                  <p> 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry </p>

                 <a href="#" class="see-more">Reserve</a>
                  </div>  
                  {/* end of col */}
                  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <img src="https://cdn.mentorcruise.com/img/undraw_unexpected_friends_tg6k.svg" alt="student image" class="img-fluid"></img>
                    {/* <img src="/cp-student.jpg" alt="student image" class="img-fluid"></img> */}
                    </div>
                  </div>  
                  </div>
               {/* end of career path */}

               <div class="cp-form">
                 <h5>Enter your details to reserve</h5>
               <form action="#" class="form-inline">
                    <div class="form-group">
                      <input type="text" class="form-control" id="username" placeholder="Enter your name"/>
                      <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                      <input type="Number" class="form-control" id="email" placeholder="Enter your phone number"/>
                      <button type="submit" class="btn btn-default" class="cp-submit">Submit</button>
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
}
