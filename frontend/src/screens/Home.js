import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.PNG'
import basiclogo from '../assets/basiclogo.PNG'
import premiumlogo from '../assets/premiumlogo.PNG'
import tillivallogo from '../assets/tillivallogo.PNG'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
         <Container  style={{marginTop:"5%", marginBottom:'5%'}}>
         <Row>
         <Col ><img src={basiclogo} alt="step1" style={{ borderRadius:20}} /></Col>  
         <Col><Row> <Col style={{marginTop:"5%", marginBottom:'5%', fontSize:16,color:'white' }}> Alla kan uppleva SUNT! <br/>Kostnadsfritt </Col> </Row>
               <Row> <Col style={{marginBottom:'5%',color:'white'}}><span style={{fontSize:26, color:'purple'}}>0 SEK</span> /manad</Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>Loren Ipsum </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>a del av leverantorsprofiler </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>Bjud in levenrantorer till dialog </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>Tillgang till dialogmallar</span> </Col> </Row>
         </Col></Row> </Container>
          <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}><button >Subscribe</button></div>
        </div>
       
          <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>Catering</h3>
            <p>Good Food is the heart of any sort of event, People forget the event but remembers the food.So, here we are with best caters of who make heavenly tasty food..</p>
          </div>

          <div className="box">
         <Container  style={{marginTop:"5%", marginBottom:'5%'}}>
         <Row>
         <Col ><img src={tillivallogo} alt="step1" style={{ borderRadius:20}} /></Col>  
         <Col><Row> <Col style={{marginTop:"5%", marginBottom:'5%', fontSize:16,color:'white' }}> For team som ar redo att proaktivit och<br/>strategiskt med upphandling! </Col> </Row>
               <Row> <Col style={{marginBottom:'5%',color:'white',fontSize:26, color:'purple'}}>Kontakta Oss</Col></Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>Loren Ipsum </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>a del av leverantorsprofiler </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>Bjud in levenrantorer till dialog </span> </Col> </Row>
               <Row> <Col> <FontAwesomeIcon icon={faCircleCheck} className="icon" size='50' style={{marginRight:'1rem' ,marginTop:'6%'}}/><span style={{fontSize:16,color:'white'}}>Tillgang till dialogmallar</span> </Col> </Row>
         </Col></Row> </Container>
          <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}><button >Subscribe</button></div>
        </div>

      </div>
    </section>
  </StyledContainer>
    

     <Footer/>
   
    </>
  )
}


const StyledContainer = styled.div`

.brandName {
  display:flex;
  align-items: center;
  justify-content: center;
  img {
    height: 5rem;
  }
}
h1 {
    color: #C36B84;
    margin:1.5rem;

  }
.icon{
  color:white;
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
     background-color: #FB948F;
  }

  }

`;

