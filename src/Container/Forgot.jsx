import { useState } from "react";
import { Link } from "react-router-dom";

let Forgot = () => {


    const[form,setForm] = useState({
        email : '',
    })
    const[errors, setErrors] = useState({
        emailErr : '',
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let emailErr = '';

        if(!form.email.includes('@')){
            emailErr = 'Enter an valid email.'
        }
        if(emailErr){
            setErrors({...errors,emailErr})
            return false;
        }
        return true;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const isValid = validate();
        if (isValid){
            // submitToServer();
        }
    }

    return(
        <>
        <div id="ForgotSection">
        <div className="h1Color">
                <h3 className="text-center">Password Retrieval</h3>
            </div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-auto">
                            <div className="shadow p-5" id="rounded">
                                <form onSubmit={handleSubmit} noValidate>
                                    <label htmlFor="Input" className="form-label">Email Id / Username</label>
                                    <input name="email" type="email" className="form-control" id="Input" aria-describedby="emailHelp" onChange={handleChange}/>
                                    <small className="text-danger">{errors.emailErr}</small>
                                    <br />
                                    <center>
                                        <button type="submit" className="clickToLogin my-3">Get OTP</button>
                                    </center>
                                    <center>
                                        <Link to="/login" style={{textDecoration:"none"}} id="linkHover"><b>Log In?</b></Link> &nbsp;&nbsp;
                                        <Link to="/signup"style={{textDecoration:"none"}} id="linkHover"><b>Sign Up?</b></Link>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Forgot;