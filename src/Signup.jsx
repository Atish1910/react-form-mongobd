import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"

function Signup(){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [ password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("",{name, email, password} )
    .then(result => console.log(result) )
    .catch(err => console.log(err));
  }
  return(
    <>
        <section>
          <div className="container border py-5 text-center">
            <h5>i am SIgnup Component</h5>
            <div className="row justify-content-center">
              <div className="col-lg-6 border py-5 mt-5 rounded-3">
                <form action="" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
                  <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" />
                  <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" />
                </form> 
                  <div className="">
                    <button className="btn btn-warning" type="submit">Submit</button>
                    <Link to='/login' className="btn btn-success" >Login</Link>
                  
                  </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
export default Signup