import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup(){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [ password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    axios.post("http://localhost:3001/register",{name, email, password} )
    .then(result => {console.log(result) 
      navigate('/login')
    } )
    .catch(err => console.log(err));
  }
  return(
    <>
        <section>
          <div className="container border py-5 text-center">
            <h5>i am SIgnup Component</h5>
            <div className="row justify-content-center">
              <div className="col-lg-6 border py-5 mt-5 rounded-3">
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter your name" name="name" onChange={(e) => setName(e.target.value)} className="form-control mb-3" required />
                  <input type="email" placeholder="email"  name="email" onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" required />
                  <input type="password" placeholder="password"  name="password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" required />
                  <div className="">
                    <button className="btn btn-warning" type="submit">Submit</button>
                  </div>
                </form> 
                    <Link to='/login' className="btn btn-success" >Login</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
export default Signup