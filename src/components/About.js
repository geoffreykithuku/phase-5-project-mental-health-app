import React from "react";
// import "../index.css"
import styled from "styled-components";

function About(){

    const About = styled.div`
    border: 0px solid black;
    background: #DFE9E9;
    position: relative;
    left: 40px;
    top: 20px;
    height: 70vh;
    width: 40vw;
    `
    const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    `
    const Description = styled.p`
    font-size: 18px;
    margin-top: 40px;
    margin-left:20px;
    color: #161312;
    text-align: left;
    line-height: 1.7rem;
    `
    const Title = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    `
    const Button = styled.button`
    margin-left: 120px;
    height: 40px;
    width: 250px;
    margin-top: 20px;
    border: 0;
    background-color: #0890DD;
    color: #fff;
    line-height: 1.79em;
    border-radius: 5px;
    font-size; 20px;
    `
    const Vision = styled.h1`
    text-align: center;
    `
    const Statement = styled.p`
    text-align: center;

    `
    
    

return (
    <>
    <Wrapper>
        <About>
        <Title>About Us</Title>
        <Description>We are a leading Counselling clinic based in Nairobi,Kenya<br></br>That seeks to provide access to quality and inclusive<br></br>counselling services to patients with mental health issues.<br></br>We also create support groups and a community for patients</Description>
        <Description>We are a leading Counselling clinic based in Nairobi,Kenya<br></br>That seeks to provide access to quality and inclusive<br></br>counselling services to patients with mental health issues.<br></br>We also create support groups and a community for patients</Description>
        <Button>Book an Appointment</Button>
        </About>
        <div>
            <img src="https://img.freepik.com/premium-photo/gratitude-help-unrecognizable-couple-family-psychologist-shaking-hands-after-successful-therapy-reconciliation-office_568137-847.jpg?w=740" alt="About us"></img>
        </div>
    </Wrapper>
    <div>
        <Vision>Our Vision</Vision>
        <Statement>To be a Premier clinic in Counselling and Therapy</Statement>
    </div>
    </>
   

)
}

export default About