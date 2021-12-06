import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import routes from '../constants/routes';
import Navitem from './Navitem';

function Navbar(): ReactElement {
  const router = useRouter();

  return (
    <nav className="px-5 py-4 no-underline flex items-center justify-between">
      <h1 className="text-3xl font-bold">CryptoApp</h1>
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
    </nav>
  );
}

export default Navbar;
