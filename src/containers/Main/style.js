import styled from "styled-components";
import { padding, color } from "../../styles";

export const MainStyle = styled.div`
  padding: ${padding.large}px;
`;

export const FilterWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 150px;
  margin: 20px auto;

  & .select__menu {
    color: ${color.black};
  }
`;
