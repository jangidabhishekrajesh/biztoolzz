import { useState } from "react";
import { Link } from "react-router-dom";


let SignUp = () => {
    
    const [form, setForm] = useState({
        name : "",
        contact : "",
        email : "",
        password : ""
    })
    const [errors, setErrors] = useState({
        nameErr : '',
        contactErr : '',
        emailErr :'',
        passwordErr :''
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let nameErr = '';
        let contactErr = '';
        let emailErr = '';
        let passwordErr = '';

        if(form.name.length <=3){
            nameErr = "Name should be minimum 3 characters!"
        }
        if(form.contact.length <=10) {
            contactErr = "Contact No. should be 10 digits!"
        }
        if (!form.email.includes('@')){
            emailErr = "Enter an valid email!"
        }
        if(form.password.length <= 8){
            passwordErr = "Password should be minimum 8 characters!"
        }
        if (nameErr||emailErr||passwordErr){
            setErrors({...errors, nameErr, contactErr, emailErr, passwordErr})
            return false;
        }
        else{
            setErrors({...errors, nameErr, contactErr, emailErr, passwordErr}) 
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
        <div id="signupSection">
            <div className="h1Color">
                <h3 className="text-center">Register Here</h3>
            </div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-auto">
                            <div className="shadow p-5" id="rounded">
                                <form onSubmit={handleSubmit} noValidate>
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input name="name" type="text" className="form-control" id="name" aria-describedby="textHelp" onChange={handleChange}/>
                                    <small className="text-danger">{errors.nameErr}</small>
                                    <br />
                                    <label htmlFor="tel" className="form-label">Contact No.</label>
                                    <div className="input-group">
                                        <div className="input-group-text" id="inputGrp">+91</div>
                                        <input name="contact" type="tel" className="form-control" id="tel" aria-describedby="telHelp" onChange={handleChange}/>
                                    </div>
                                    <small className="text-danger">{errors.contactErr}</small>
                                    <br />
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email Id / Username</label>
                                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                                    <small className="text-danger">{errors.emailErr}</small>
                                    <br />
                                    <label htmlFor="inputPassword" className="col-form-label">Password</label>
                                    <input name="password" type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange}/>
                                    <small className="text-danger">{errors.passwordErr}</small>
                                    <center>
                                        <button type="submit" className="clickToLogin my-3">Register</button>
                                    </center>
                                    <center>
                                        <Link to="/login"style={{textDecoration:"none"}} id="linkHover">If you have an account, <b>Log In?</b></Link>
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
export default SignUp;