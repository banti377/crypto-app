import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ContentSpan = styled.span`
  position: relative;
  height: 55px;
  border-radius: 6px;
  border: none;
  background: rgb(88, 99, 223);
  color: white;
  font-size: 21px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-4px);
  will-change: transform;
  transition: all 600ms cubic-bezier(0, 0.56, 0.53, 1.5) 0s;
`;

const BackdropSpan = styled.span`
  position: absolute;
  background: linear-gradient(to left, rgb(59, 72, 219) 0%, rgb(59, 72, 219) 3%, rgb(73, 86, 235) 97%, rgb(59, 72, 219) 100%);
  border-radius: 6px;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  position: relative;
  text-decoration: none;
  transition: filter 600ms ease 0s;
  width: 200px;
  &:hover {
    transition: filter 250ms ease 0s;
    filter: brightness(110%);
    text-decoration: none;
  }
  &:hover ${ContentSpan} {
    transform: translateY(-8px);
    transition: all 250ms ease 0s;
  }
  &:active ${ContentSpan} {
    transform: translateY(-2px);
    transition: all 25ms ease 0s;
  }
`;

function Button({ children }: Props): ReactElement {
  return (
    <StyledButton
      type="button"
    >
      <BackdropSpan />
      <ContentSpan>{children}</ContentSpan>
    </StyledButton>
  );
}

export default Button;
