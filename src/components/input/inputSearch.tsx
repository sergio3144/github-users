import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';

type ValuesInput = {
  handleSubmitData: (event: React.FormEvent<HTMLFormElement>) => void,
  handleChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const InputSearch = ({ handleChangeData, handleSubmitData }: ValuesInput): JSX.Element => {
  return (
    <form className="mt-10 relative" onSubmit={handleSubmitData}>
      <BiSearchAlt2 color={'#0079fe'} size={30} className='absolute top-2.5 left-2' />
      <input
        onChange={handleChangeData}
        type="text"
        className="bg-bg-section w-full h-input outline-none rounded-xl text-white pl-12 pr-pdInput text-lg"
      />
      <button className='absolute left-50 right-2 top-2 bottom-2 bg-bg-secundary px-5 text-base text-white rounded-lg' type="submit">
        Search
      </button>
    </form>
  );
};

export { InputSearch };
