/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from 'react';

interface Props {
  logoURL: string;
  title: string;
  symbol: string;
}

function Card({ logoURL, title, symbol }: Props): ReactElement {
  return (
    <div className="relative flex flex-col space-y-5 rounded-md p-5 shadow-md bg-white">
      <div className="absolute flex items-center justify-center -top-6 left-4 h-14 w-14 bg-white rounded-xl">
        <img
          className="h-10 w-10 "
          src={logoURL}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h5 className="text-sm font-medium text-gray-500">{symbol}</h5>
      </div>
      <div>body</div>
    </div>
  );
}

export default Card;
