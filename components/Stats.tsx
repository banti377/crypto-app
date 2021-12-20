import React, { ReactElement } from 'react';
import { formatNumber } from '../utils';

interface Props {
  label: string;
  value?: number | null;
  valueSuffix?: string;
  valueFractionDigits?: number;
}

function Stats({
  label, value, valueSuffix, valueFractionDigits,
}: Props): ReactElement {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-medium">
        {label}
      </span>
      <span className="text-lg font-bold">
        {
          value
            ? `${formatNumber(value, valueFractionDigits)}${valueSuffix ? ` ${valueSuffix}` : ''}`
            : 'N/A'
        }
      </span>
    </div>
  );
}

export default Stats;
