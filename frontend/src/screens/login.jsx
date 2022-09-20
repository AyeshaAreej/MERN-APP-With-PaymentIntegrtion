import {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/logo.PNG'
import {Formik} from 'formik'
import * as Yup from 'yup';

const Login = () => {

    const navigate = useNavigate()


    // useEffect(()=>{
    //   if(localStorage.getItem("user-token")){
    //     navigate('/')
    //   }
    // },[])

const handleSubmit = (values)=>{

    const value = {
        username: values.username,
        password: values.password
    }

    fetch(`http://localhost:8000/loginn`,{
        method: "post",
        body: JSON.stringify(value),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }   
        
  }).then(res=>res.json()).then(result=>{console.log(result)
    if(result.status == 'ok')
    {
        localStorage.setItem('user-token',JSON.stringify(result.token))
        console.log("done")
        navigate('/')
    }
    else{
     console.log('error')
    }
  }).catch(err=>console.log(err.message))
  
};
 return (
    <>
  <StyledContainer>
     <div className='brandName'> 
       <img src={logo} alt=''/>
       <h1>BETA App</h1>
    </div>
         <Formik  
          initialValues={{
          username:'',
          password:'',}}
          onSubmit={ (values) => {
          handleSubmit(values)
          } }
          validationSchema={Yup.object().shape({
          username: Yup.string()
          .required("Username is required"),
          password: Yup.string()
          .min(6, "Password must be 6 characters at minimum")
          .required("Password is required") })}>  

          {({ touched, errors,handleSubmit, handleBlur, values,handleChange }) =>( 

          <form onSubmit={handleSubmit} >  
           <div className='heading'>
                  <h1>Sign In</h1>
           </div>
           <label htmlFor="username" style={{fontSize:20}}>Username</label>
           <input type="text"  id="username"   name='username' placeholder="Enter your Username"  onBlur={handleBlur} onChange={handleChange} value={values.username} />
           {touched.username && errors.username ? <div className='error' style={{  fontSize: 12, color: 'red',textTransform:"lowercase" }}> {errors.username}</div> : null}
                      
           <label htmlFor="pwd1" style={{fontSize:20}} >Password</label>
           <input type="password" id="pwd1" name="password" placeholder="Enter password"  autoComplete="false" onBlur={handleBlur} onChange={handleChange} value={values.password}  />
           {touched.password && errors.password ? <div className='error' style={{  fontSize: 12, color: 'red',textTransform:"lowercase" }}> {errors.password}</div> : null}
                            
                            
          <button type="submit" style={{marginLeft:'10%'}}onClick={handleSubmit} >SIGNIN</button>
          <span>Don't have an account? <Link to='/register'>SignUp</Link></span>
           </form>
          
           )}
           </Formik>  
    </StyledContainer>
 </>
  )
}

const StyledContainer = styled.div`
width: '100%';
height: '100%';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
background-color:white;
.brandName {
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  img {
    height: 5rem;
  }
  h1 {
    color: #C36B84;
    text-transform: uppercase;
  }
}
.heading {
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #C36B84;
    text-transform: uppercase;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #F2CAC8;
  border-radius: 2rem;
  padding: 4rem 6rem;
  margin: 1rem;
 
}
label{
  color:#C36B84;
  
}
input {
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid purple;
  border-radius: 0.4rem;
  color:#000;
  width: 100%;
  placeholder:white;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid purple;
    outline: none;
  }
}
button {
 
  background-color:#C36B84;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  border-radius: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 4px 3px 9px -1px gray;
            box-shadow: 4px 3px 9px -1px gray;
    -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
     background-color: #FB948F;
  }


  span {
    font-weight: bold;
  }
}

`;


export default Login