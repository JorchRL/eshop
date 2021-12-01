import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Great deals! Free shipping on orders over $50</Container>;
};

export default Announcement;
