import React, { ReactElement } from 'react';

interface Props {
  title: string;
  content: JSX.Element;
}

function Card({ title, content }: Props): ReactElement {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <div className="relative group">
        <div className="absolute -inset-0.5 rounded-lg blur opacity-75 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:opacity-100 transition duration-700 group-hover:duration-200" />
        <button
          type="button"
          className="relative px-8 py-4 rounded-lg bg-black text-white space-y-3 transform group-hover:rotate-0 transition duration-300"
        >
          <h4 className="text-xl font-medium text-indigo-400">{title}</h4>
          {content}
        </button>
      </div>
    </div>
  );
}

export default Card;
