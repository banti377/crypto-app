/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from 'react';
import { CoinsEntity } from '../types/coints';
import Stats from './Stats';

interface Props {
  coin: CoinsEntity;
  baseCurrency?: string;
}

function Card({
  coin: {
    iconUrl, name, symbol, marketCap, price, rank, circulatingSupply,
  },
  baseCurrency,
}: Props): ReactElement {
  return (
    <div className="relative flex flex-col space-y-5 rounded-md p-5 shadow-md bg-white">
      <div className="absolute flex items-center justify-center -top-6 left-4 h-14 w-14 bg-white rounded-xl">
        <img
          className="h-10 w-10 "
          src={iconUrl}
          alt={name}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-sm font-medium text-gray-500">{symbol}</h5>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Stats
          label="Price"
          value={parseFloat(price)}
          valueSuffix={baseCurrency}
        />
        <Stats
          label="Rank"
          value={rank}
          valueFractionDigits={0}
        />
        <Stats
          label="Market Cap"
          value={marketCap}
          valueSuffix={baseCurrency}
        />
        <Stats
          label="Circulating Supply"
          value={circulatingSupply}
        />
      </div>
    </div>
  );
}

export default Card;
