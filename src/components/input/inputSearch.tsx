import { BiSearchAlt2 } from 'react-icons/bi'


const InputSearch = ():JSX.Element => {
  return (
    <>
      <form className="mt-10 relative">
        <BiSearchAlt2 color={'#0079fe'} size={30} className='absolute top-2.5 left-2'/>
        <input 
          type="text" 
          className="bg-bg-section w-full h-input outline-none rounded-xl text-white pl-12 pr-pdInput text-lg"
        />
        <button className='absolute left-50 right-2 top-2 bottom-2 bg-bg-secundary px-5 text-base text-white rounded-lg'>Search</button>
      </form>
    </>
  )
}

export { InputSearch }
