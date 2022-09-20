import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.PNG'
import Colors from '../constants/Colors'

export default function Footer() {
    
        return (
  
           <StyledContainer>
          
            <div className='brandName'> 
             <img src={logo} alt=''/>
              <h1>BETA </h1>
           </div>

           <div style={{display:'flex',flexDirection:'row', marginLeft:'1.5rem'}} >
           
           <p>Copyright © 2022 | All rights reserved. </p>
           <input type="email"  name="email" placeholder="Enter your email"  autoComplete="false"/>
           <button >Subscribe</button>
          
          </div>

  

  </StyledContainer>


        )
    }

const StyledContainer = styled.div`
 .brandName {
      display:flex;
      justify-content:start;
      img {
        height: 5rem;
      }
    }
    h1 {
        color: #C36B84;
        margin:1.5rem;
      }
      input {
  background-color: transparent;
  padding: 1rem;
  marginLeft:25rem;
  border: 0.1rem solid purple;
  border-radius: 0.4rem;
  color:#000;
  width: 15%;
  placeholder:white;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid purple;
    outline: none;
  }
  button{
    backgroundColor:blue;
  }
}
  
    `;
    
    