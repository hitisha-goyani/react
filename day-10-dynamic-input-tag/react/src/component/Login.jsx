
import React, { useRef, useState } from "react";

const Login = () => {

  const [log, setLog] = useState({email:""});
  const emailRef = useRef();
  const [count, setCount] = useState(1);

  function hanldeChange(e) {
    const { value, name } = e.target;

    setLog({
      ...log,
      [name]: value,
    });
  }

  function handleSubmit() {
    if (log.email != "") {
      console.log(log);
    } 
    else {
      console.log(emailRef.current);
      emailRef.current.style.background = "red";
    }
    // console.log(emailRef.current);
    // emailRef.current.style.background = "red"
  }




  return (
    <>
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-4">
                <div className="d-flex flex-column gap-3 align-items-center">
                    {[...Array(count)].map((ele,index)=>(
                        <input ref={emailRef} 
                                name={`email${index}`}
                                type="email"
                                placeholder={"email - " + index}
                                className="form-control"
                                onChange={hanldeChange}>
                                    
                        </input>
                    )
                    )}
                    <button
                onClick={() => setCount(count + 1)}
                className="btn btn-outline-dark btn-sm"
              >
                Add {count}
              </button>
              <button
                onClick={handleSubmit}
                className="btn w-100 btn-success btn-sm"
              >
                Login{" "}
              </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
