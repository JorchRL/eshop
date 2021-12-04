import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/8727911/pexels-photo-8727911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: right 0px bottom -600px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 7px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  background-color: #e7e7e7;
  border: none;
  transition: all 0.1s ease;

  &:hover {
    outline: 1px solid teal;
  }
  &:focus {
    outline: 2px solid teal;
    background-color: #f8f8f8;
  }
`;

const Button = styled.button`
  width: 40%;
  margin-top: 10px;
  align-self: center;
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s ease;
  border: 1px solid black;

  &:hover {
    background-color: teal;
    color: white;
    border: 1px solid teal;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOG IN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
