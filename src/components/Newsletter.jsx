import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #eeddc8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;
const Desc = styled.div`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
  text-align: center;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid lightgray; */
  flex-direction: row;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  flex: 1;
  transition: all 0.1s ease;

  &:hover {
    background-color: #016969;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>newsletter</Title>
      <Desc>get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder={"Your Mail"} />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
