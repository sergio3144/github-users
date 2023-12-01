import { MdLocationOn } from 'react-icons/md'
import { AiOutlineLink } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { MdHomeWork } from 'react-icons/md'

import octocat from '../../../public/image.jpg'

const SectionUser = ():JSX.Element => {
  return (
    <div className='bg-bg-section mt-7 rounded-xl p-10'>
      <div className='flex justify-between flex-wrap'>
        <div className='flex items-center gap-5'>
          <img 
            width={100} 
            src={ octocat } 
            alt="" 
            className='rounded-full'
          />

          <div className='flex flex-col'>
            <p className='text-white text-2xl'>The Octacat</p>
            <span className='text-text-secundary mb-2'>@octocat</span>
            <p className='text-white opacity-60 font-extralight'>This profile has no bio</p>
          </div>

        </div>
        <p className='text-white opacity-60 font-extralight text-sm'>Joined 25 Jan 2011</p>
      </div>

      <div className='flex flex-col justify-center w-full mt-5'>
        <div className='bg-bg-repos flex justify-between max-w-target py-3 px-5 rounded-xl'>
          <div>
            <p className='text-white opacity-70'>Respos</p>
            <h1 className='text-white text-xl'>8</h1>
          </div>

          <div>
            <p className='text-white opacity-70'>Followers</p>
            <h1 className='text-white text-xl'>3938</h1>
          </div>

          <div>
            <p className='text-white opacity-70'>Following</p>
            <h1 className='text-white text-xl'>9</h1>
          </div>
        </div>

        <div className='flex gap-5 mt-5 flex-wrap'>
          <div className='flex items-center gap-1'>
            <MdLocationOn color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>San Francisco</p>
          </div>

          <div className='flex items-center gap-1'>
            <AiOutlineLink color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>http://github.blob</p>
          </div>

          <div className='flex items-center gap-1'>
            <AiOutlineTwitter color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>Not Available</p>
          </div>

          <div className='flex items-center gap-1'>
            <MdHomeWork color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>@github</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SectionUser }