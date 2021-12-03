import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  z-index: 3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  /* transition: all 0.5s ease; */

  /* &:hover {
    transform: scale(1.05, 1.05);
  } */
`;

const Circle = styled.div`
  background-color: white;
  // we don't want the circle to strech into an oval
  // if the container is stretched by flexbox.
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
