import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer";

function About() {
  const About = styled.div`
    border: 0px solid black;
    background: #dfe9e9;
    position: relative;
    left: 40px;
    top: 20px;
    height: 70vh;
    width: 40vw;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  `;
  const Description = styled.p`
    font-size: 18px;
    margin-top: 40px;
    margin-left: 20px;
    color: #161312;
    text-align: left;
    line-height: 1.7rem;
  `;
  const Title = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
  `;
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
    `;
  const Vision = styled.h1`
    text-align: center;
    font-size: 40px;
    color: #0890dd;
    line-height: 1.35em;
  `;
  const Statement = styled.p`
    text-align: center;
    font-size: 30px;
    color: #161312;
    line-height: 1.35em;
    margin-top: 10px;
  `;
  const MyVision = styled.div`
    margin-top: 90px;
  `;
  const Section = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  `;
  const Content = styled.div`
    border: 0px solid black;
    background: #0890dd;
    height: 50vh;
    width: 30vw;
  `;
  const Heading = styled.h3`
    margin-top: 50px;
    font-size: 25px;
    margin-left: 30px;
    color: #fff;
  `;
  const Text = styled.div`
    margin-left: 30px;
    font-size: 20px;
    line-height: 1.87em;
    color: #fff;
  `;
  const Section2 = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    margin-bottom: 40px;
  `;
  const Services = styled.div`
    border: 0px solid black;
    margin-top: 90px;
    width: 600px;
  `;
  const Title1 = styled.h2`
    font-size: 40px;
    color: #079039;
    margin-left: 50px;
  `;
  const List = styled.li`
    font-size: 20px;
    line-height: 1.8em;
    margin-left: 50px;
    color: #161312;
  `;
  const Button1 = styled.button`
    margin-left: 120px;
    height: 40px;
    width: 250px;
    margin-top: 20px;
    border: 0;
    background-color: #079039;
    color: #fff;
    line-height: 1.8em;
    border-radius: 5px;
    font-size; 25px;
    `;
  const navigate = useNavigate();

  function handleClick() {
    navigate("/check");
  }
  return (
    <>
      <Wrapper>
        <About>
          <Title>About Us</Title>
          <Description>
            We are a leading Counselling clinic based in Nairobi,Kenya<br></br>
            That seeks to provide access to quality and inclusive<br></br>
            counselling services to patients with mental health issues.<br></br>
            We also create support groups and a community for patients
          </Description>
          <Description>
            We are a leading Counselling clinic based in Nairobi,Kenya<br></br>
            That seeks to provide access to quality and inclusive<br></br>
            counselling services to patients with mental health issues.<br></br>
            We also create support groups and a community for patients
          </Description>
          <Button onClick={handleClick}>Book an Appointment</Button>
        </About>
        <div>
          <img
            style={{ height: "60vh", marginTop: "22px", borderRadius: "20px" }}
            src="https://img.freepik.com/premium-photo/gratitude-help-unrecognizable-couple-family-psychologist-shaking-hands-after-successful-therapy-reconciliation-office_568137-847.jpg?w=740"
            alt="About us"
          ></img>
        </div>
      </Wrapper>
      <MyVision>
        <Vision>Our Vision</Vision>
        <Statement>
          To be a Premier clinic in Mental Health Counselling and Therapy.
        </Statement>
      </MyVision>
      <Section>
        <Content>
          <Heading>Our Mission</Heading>
          <Text>
            To provide quality mental health care<br></br> to the
            community,educate the community<br></br> on mental well-being and
            participate<br></br> in providing mental health awareness.
          </Text>
        </Content>
        <Content>
          <Heading>Our Philosophy</Heading>
          <Text>
            A lifestyle of wellness helps an individual<br></br> to heal,nourish
            and thrive,creating a positive<br></br> attitude towards life and
            the community.
          </Text>
        </Content>
        <Content>
          <Heading>Our Core Values</Heading>
          <Text>
            Confidentiality,Assurance,Responsibility,<br></br>Empathy,Service to
            Community.
          </Text>
        </Content>
      </Section>
      <Section2>
        <div>
          <img
            style={{ height: "60vh", marginTop: "22px", borderRadius: "20px" }}
            src="https://static.wixstatic.com/media/a2efb6_28b16c9b115848299737e33c77bae25b~mv2.jpg/v1/fill/w_640,h_540,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/a2efb6_28b16c9b115848299737e33c77bae25b~mv2.jpg"
            alt="our services"
          ></img>
        </div>
        <Services>
          <Title1>Our Services</Title1>
          <ul>
            <List>Suicide Prevention Counselling</List>
            <List>Trauma Counselling and Therapy</List>
            <List>Anxiety Counselling</List>
            <List>Community counselling and support groups</List>
          </ul>
          <Button1 onClick={handleClick}>Book an Appointment</Button1>
        </Services>
      </Section2>
      <Footer />
    </>
  );
}

export default About;
