import styled from "styled-components";
import { Layout } from "antd";

export const BackgroundDiv = styled.div`
  border: 2px solid white;

  ${props =>
    props.primary &&
    `
      background: blue;
    `}

  ${props => (props.color ? ` color: ${props.color};` : `color red`)}
`;

export const LayoutWrapper = styled(Layout)`
  min-height: 100vh;
`;
