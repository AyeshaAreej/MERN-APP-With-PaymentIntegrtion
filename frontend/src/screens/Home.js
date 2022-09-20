import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.PNG'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
    <StyledContainer>
     <div className='brandName'> 
       <img src={logo} alt=''/>
       <h1>BETA </h1>
    </div>
    <h1>Welcome to the app, Now select a payment plan</h1>


    <section className="service" id="service">

<h1 className="heading"> our <span>services</span> </h1>

<div className="box-container">

<div className="box">
    {/* <i className="fas fa-map-marker-alt"></i> */}
    <i> <FontAwesomeIcon icon={ faBuildingColumns } /></i>
    <h3>venue selection</h3>
    <p>Venue selection isn't an easy task in today's world where too much events are being celebrated everyday and hard to find a best suited venue for a specific date.But we already have list of venues for your event. </p>
</div>
<div className="box">
    <i className="fas fa-utensils"></i>
    <h3>Catering</h3>
    <p>Good Food is the heart of any sort of event, People forget the event but remembers the food.So, here we are with best caters of who make heavenly tasty food..</p>
</div>
<div className="box">
    <i className="fas fa-photo-video"></i>
    <h3>Photography</h3>
    <p>It is a great way to keep priceless moments with the your people. One of the best decisions that you can make while planning out an event is to hire a professional photographer and we do it for you .</p>
</div>




</div>

</section>


 
    </StyledContainer>
     <Footer/>
   
    </>
  )
}


const StyledContainer = styled.div`
${'' /* display: flex;
flex-direction: column;
justify-content: center;
${'' /* align-items: center; */}
${'' /* gap: 1rem; */}
${'' /* background-color:white; */} */}
.brandName {
  display:flex;
  align-items: center;
  justify-content: center;
  ${'' /* gap: 0.5rem; */}
  img {
    height: 5rem;
  }
}
h1 {
    color: #C36B84;
    margin:1.5rem;

  }


`;

