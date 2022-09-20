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

           <div style={{display:'flex',flexDirection:'row', alignItems:'center', marginLeft:'1rem',elevation:20, borderColor :'black',  padding:4, borderWidth:2, borderRadius:15,  }} > 
             <p>Copyright © 2022 | All rights reserved. </p>
             <div  style={{  padding:'0.3rem', borderWidth:2, elevation:25,borderRadius:15, backgroundColor:'#F2CAC8', width:'22%', marginLeft:'60%'}}> 
              <input type="email" name="subscriberEmail" placeholder='Enter Email.... '  />
              <button >Subscribe</button>
            </div>
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
  border-radius: 1rem;
  color:#000;
  placeholder:white;
  font-size: 1rem;
  elevation:25;
 

}
button{
  background-color:#C36B84;
  color:#fff;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding:0.6rem;
  
  }


    `;
    
    