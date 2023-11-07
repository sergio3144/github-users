import { MdLightMode } from 'react-icons/md'

const Header = ():JSX.Element => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <p className='text-2xl text-white'>devfinder</p>
        <div className='flex items-center gap-1 cursor-pointer'>
          <span className='text-white'>LIGHT</span>
          <MdLightMode color={'white'} size={ 20 }/>
        </div>
      </div>
    </>
  )
}

export { Header }
