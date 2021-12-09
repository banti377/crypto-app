import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import styled from 'styled-components';
import routes from '../constants/routes';
import Navitem from './Navitem';

const StyledNav = styled.nav`
  padding: 0 10%;
`;

function Navbar(): ReactElement {
  const router = useRouter();

  return (
    <StyledNav className="px-20 h-28 bg-primary text-white rounded-bl-full py-4 no-underline flex items-center justify-between w-full">
      <h1 className="text-4xl font-bold">
        Crypto App
      </h1>
      <ul className="flex items-center space-x-10 font-medium">
        <Navitem
          href={routes.home}
          label="Home"
          active={router.pathname === routes.home}
        />
        <Navitem
          href={routes.news}
          label="News"
          active={router.pathname === routes.news}
        />
      </ul>
    </StyledNav>
  );
}

export default Navbar;
