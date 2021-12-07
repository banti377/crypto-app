import React, { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  active?: boolean;
  href: string;
  label: string;
}

interface AProps {
  active: boolean;
}

const StyledA = styled.a<AProps>`
  position: relative;
  padding: 5px;
  &:after {
    content: "";
    background-color: #EC4899;
    position: absolute;
    height: 3px;
    width: ${(props) => (props.active ? '100%' : '0')};
    left: 0;
    bottom: 0;
    transition: 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;

function Navitem({ active = false, href, label }: Props): ReactElement {
  return (
    <li className="no-underline">
      <Link
        href={href}
        passHref
      >
        <StyledA
          active={active}
          className="text-pink-500 text-xl font-medium"
        >
          {label}
        </StyledA>
      </Link>
    </li>
  );
}

export default Navitem;
