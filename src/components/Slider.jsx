import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* outline: 2px solid orange; */
  overflow: hidden;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
    background-color: #d3d3d3;
  }
`;

// SLIDER
const Wrapper = styled.div`
  /*  The wrapper will animate to the sides when "transitioning"
      between slides, so we do not hardcode its width */
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 0.5s ease;
`;
const Slide = styled.div`
  /*  The slide's size is set as the size of the screen
      as there will be many sliders one after the other */
  display: flex;
  width: 100vw;
  height: 100%;
  align-items: center;
  /* outline: 1px solid coral; */
  background-color: ${(props) => props.bg};
`;
// ^^^^^^

// IMAGE OF SLIDER
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
// ^^^^^^

// INFO OF SLIDER
const InfoContainer = styled.div`
  /* height: 100%; */
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  text-transform: uppercase;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.12s ease;

  &:hover {
    transform: scale(1.08);
    background-color: black;
    color: white;
  }
`;
// ^^^^^^

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    } else {
      console.log("please check handleArrowClick()");
    }
  };

  return (
    <Container>
      <Arrow direction={"left"} onClick={() => handleArrowClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img}></Image>
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>show now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction={"right"} onClick={() => handleArrowClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
