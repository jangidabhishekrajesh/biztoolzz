import { useState } from "react";
import { Link } from "react-router-dom";

let Login = () =>{


    const [form, setForm] = useState({
        email : "",
        password : ""
    })
    const [errors, setErrors] = useState({
        emailErr :'',
        passwordErr :''
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let emailErr = '';
        let passwordErr = '';

        if (!form.email.includes('@')){
            emailErr = "Enter an valid email!"
        }
        if(form.password.length <= 8){
            passwordErr = "Password should be minimum 8 characters! "
        }
        if (emailErr||passwordErr){
            setErrors({...errors, emailErr, passwordErr})
            return false;
        }
        else{
            setErrors({...errors, emailErr, passwordErr}) 
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
        <div id="loginSection">
            <div className="h1Color">
                <h3 className="text-center">Login Page</h3>
            </div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-auto">
                            <div className="shadow p-5" id="rounded">
                                <form onSubmit={handleSubmit} noValidate>
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email Id / Username</label>
                                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                                    <small className="text-danger">{errors.emailErr}</small>
                                    <br />
                                    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                                    <input name="password" type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange}/>
                                    <small className="text-danger">{errors.passwordErr}</small>

                                    <center>
                                        <button type="submit" className="clickToLogin my-3">Log In</button>
                                    </center>
                                    <center>
                                        <Link to="/forgot" style={{textDecoration:"none"}} id="linkHover"> Forgot <b>Password?</b></Link> &nbsp;&nbsp;
                                        <Link to="/signup"style={{textDecoration:"none"}} id="linkHover">Don't have an account, <b>Sign Up?</b></Link>
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
export default Login;