import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(){
  const [email , setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {email, password})
    .then(result => {console.log(result)
      if(result.data === "Success"){
        navigate("/home");
      }
    })
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
                  <input type="email" placeholder="email"onChange={(e) => setEmail(e.target.value)}  name="email"  className="form-control mb-3" />
                  <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}  name="password" className="form-control mb-3" />
                  <div className="">
                    <button className="btn btn-warning" type="submit">Submit</button>
                  </div>
                </form> 
                    <Link to='/register' className="btn btn-success" >Register</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
export default Login