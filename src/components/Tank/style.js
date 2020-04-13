import styled from "styled-components";
import { padding, fontSize, color } from "../../styles/index";

export const TankStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${padding.small}px;
  width: 310px;
  height: 195px;
  box-sizing: border-box;

  font-size: ${fontSize.medium}px;
  color: ${color.white};

  background: ${props => "url(" + props.country + ")"};
  background-size: cover;

  &:hover {
    box-shadow: 0px 0px 7px 5px ${color.greyLight};
  }

  & p {
    width: 100%;
    margin: 0;
    text-align: right;
  }
`;
