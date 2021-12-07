import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import routes from '../constants/routes';
import Navitem from './Navitem';

function Navbar(): ReactElement {
  const router = useRouter();

  return (
    <nav className="px-10 py-4 no-underline flex items-center justify-between sticky bg-black w-full text-white">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-pink-500 to-purple-500">
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
    </nav>
  );
}

export default Navbar;
