import {useState} from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components'
import logo from '../assets/logo.PNG'
import basiclogo from '../assets/basiclogo.PNG'
import premiumlogo from '../assets/premiumlogo.PNG'
import tillivallogo from '../assets/tillivallogo.PNG'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


export default function Home() {

 const publisheableKey='pk_test_51LkQKfF3LIAhYdcnZAK7gnWBrJZM5udfaf5vxEgs8m0fokru6gkDeXR9u7OSHaC1OZFgTSIwjU5nnwAK0eXztgzN00KFIjzWTH';

  const [toggleButton, setToggleButton]=useState(false)
  const [premiumPrice, setPremiumPrice]=useState(12000)

// function to handle toggle button 
const handleClick=()=>{
  //handling monthly and yearly option
  if(!toggleButton){
    setPremiumPrice(995)
  }
  else{
    setPremiumPrice(12000)
  }
  setToggleButton(!toggleButton)
  console.log("toggle value",toggleButton )}

  //Payment Function
  const payNow = async token =>{
   try{
    const response = await axios({
      url:'http://localhost:8000/payment',
      method:'post',
      data:{
        amount: premiumPrice,
        token,
      },
     });
     if(response.status === 200){
      console.log('Your payment is successfull')
     }
   } catch(error){
    console.log(error)
   }
  }



  return (
    <>
    <StyledContainer>
       <div className='brandName'> 
         <img src={logo} alt=''/>
         <h1>BETA </h1>
       </div>
      
       <h1>Welcome to the app, Now select a payment plan</h1>
      
       <section className="service" id="service">
     
       <span className='planContainer'>Monthly / Yearly</span>
       <div className='toggleContainer'> 
         <div onClick={handleClick} className='toggle'> 
         {toggleButton?<div className='toggle_left'></div>:
         <div className='toggle_right'></div>}
        </div> 
      </div>

       <div className="box-container">
        <div className="box">
         <Container  className='cardContainer'>
         <Row>
         <Col><div className='cardLogo'><img src={basiclogo} alt="step1"  style={{borderRadius:20}} />
                    <h2>For Individuals <br/><span>Basic</span></h2></div> </Col> 
         <Col><Row> <Col className='description'> Alla kan uppleva SUNT! <br/>Kostnadsfritt </Col> </Row>
               <Row> <Col style={{marginBottom:'5%',color:'white'}}><span style={{fontSize:30, color:'purple'}}>0 SEK</span> /manad</Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'white'}}>Loren Ipsum </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'white'}}>a del av leverantorsprofiler </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'white'}}>Bjud in levenrantorer till dialog </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'white'}}>Tillgang till dialogmallar</span> </Col> </Row>
         </Col></Row> </Container>
          <div className='buttonContainer'><button >Get Started</button></div>
        </div>
       
         <div className="pox">
         <Container  className='cardContainer'>
         <Row><Col><div className='cardLogo'><img src={premiumlogo} alt="step1" style={{ borderRadius:20}} />
                   <h2>For Startups <br/><span>Premium</span></h2></div> </Col>  
              <Col><Row> <Col className='descriptionP'> For dig som vill uppna battre resultant<br/> med dina upphandlingar! </Col> </Row>
         <Row> <Col style={{marginBottom:'5%',color:'white'}}><span style={{fontSize:30, color:'white'}}>{premiumPrice} SEK</span> /manad</Col> </Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'gray'}}>Loren Ipsum </span> </Col> </Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'gray'}}>a del av leverantorsprofiler </span> </Col> </Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'gray'}}>Bjud in levenrantorer till dialog </span> </Col> </Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50'/><span style={{fontSize:16,color:'gray'}}>Tillgang till dialogmallar</span> </Col> </Row>
               </Col>
         </Row> </Container>
         <div className='buttonContainer'><button >Get Started</button></div>
         <div className='buttonContainer'>
         <StripeCheckout
         stripeKey={publisheableKey}
         label="PayNow"
         name="Pay with Credit Card"
         billingAddress
         shippingAddress
         amount={premiumPrice}
         description={`Your total is $${premiumPrice}`}
         token={payNow}
        /></div>
         </div>

        <div className="box">
         <Container   className='cardContainer'>
         <Row>  <Col><div className='cardLogo'><img src={tillivallogo} alt="step1" style={{ borderRadius:20}} />
                     <h2>For Big Companies <br/><span>Tillval</span></h2></div> </Col>
                <Col><Row> <Col className='description'> For team som ar redo att proaktivit och<br/>strategiskt med upphandling! </Col> </Row>
         <Row> <Col style={{marginBottom:'5%',color:'white',fontSize:30, color:'purple'}}>Kontakta Oss</Col></Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' /><span style={{fontSize:16,color:'white'}}>Loren Ipsum </span> </Col> </Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' /><span style={{fontSize:16,color:'white'}}>a del av leverantorsprofiler </span> </Col> </Row> 
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' /><span style={{fontSize:16,color:'white'}}>Bjud in levenrantorer till dialog </span> </Col> </Row>
         <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' /><span style={{fontSize:16,color:'white'}}>Tillgang till dialogmallar</span> </Col> </Row>
               </Col>
         </Row> </Container>
          <div className='buttonContainer'><button >Get Started</button></div>
         </div>

      </div>
    </section>
  </StyledContainer>


  
  <Footer/>
   </>
  )
}


const StyledContainer = styled.div`

.service .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
 
}
.service .box-container .pox{
  border-radius: 1rem;
  background: #07285d;
  padding: 1.5rem;
  &:hover {
    -webkit-box-shadow: 4px 3px 9px -1px gray;
            box-shadow: 4px 3px 9px -1px gray;
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    }
}
.service .box-container .box {
  border-radius: 1rem;
  background: #ac7494;
  padding: 1.5rem;
  &:hover {
    -webkit-box-shadow: 4px 3px 9px -1px gray;
            box-shadow: 4px 3px 9px -1px gray;
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    }
}
.cardContainer {
  margin-top:2rem;
  margin-bottom:2rem;
}
.description{
  margin-top:5%;
  margin-bottom:5%;
  padding:0.5rem;
  font-size:1.2rem;
  color:white;
}
.descriptionP{
  margin-top:5%;
  margin-bottom:5%;
  padding:0.5rem;
  font-size:1.2rem;
  color:gray;
}
body {
  background: #fff;
}
section {
  padding: 2rem 9%;
}
.brandName {
  display:flex;
  align-items: center;
  justify-content: center;
  img {
    height: 5rem;
    border-radius: 2rem;
  }
}
.planContainer {
  justify-content:center;
  display:flex;
 font-size:1.3rem;
 color: #C36B84;
}

h1 {
    color: #C36B84;
    margin:1.5rem; }
h2 {
    color: white;
    margin:1.5rem; }
.icon{
  color:white;
  margin-right:1rem;
  margin-top:1.4rem;
 
}
.cardLogo {
  flex-direction:row;
  display:flex;
}
.buttonContainer{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:0.4rem;
}
button{
  background-color:#C36B84;
  color:#fff;
  border-radius: 3rem;
  font-size: 2.5rem;
  padding:1.2rem;
  &:hover {
    -webkit-box-shadow: 4px 3px 9px -1px gray;
            box-shadow: 4px 3px 9px -1px gray;
    -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
     background-color: #FB948F;}
  }
.toggleContainer{
  justify-content:center;
  display:flex;
  margin-bottom:23px;
}

.toggle{
  display:flex;
  flex-direction:row;
  background-color:#07285d;
  height:30px;
  width:60px;
  border-radius:30px;
  margin-top:30px;
}
.toggle_left{
  background-color:white;
  height:20px;
  width:20px;
  border-radius:20px;
  margin:5px;
}
.toggle_right{
  background-color:white;
  height:20px;
  width:20px;
  border-radius:20px;
  margin:5px 5px 5px 30px;
}`;

