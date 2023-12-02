import { MdLocationOn } from 'react-icons/md'
import { AiOutlineLink } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { MdHomeWork } from 'react-icons/md'

type UserData = {
  nameUser: string | undefined,
  loginName: string | undefined,
  bioProfile: string | undefined,
  numberRespos: number | undefined,
  followers: number | undefined,
  following: number | undefined,
  location: string | undefined,
  url: string | undefined,
  twitterUserName: string | undefined,
  company: string | undefined,
  created_at: string | undefined
}

import octocat from '../../../public/image.jpg'

const SectionUser = ({ nameUser, loginName, bioProfile, numberRespos, followers, following, location, url, twitterUserName, company, created_at }:UserData):JSX.Element => {
  return (
    <div className='bg-bg-section mt-7 rounded-xl p-10'>
      <p className='text-white opacity-60 font-extralight text-sm mb-5'>Joined { created_at?.slice(2, -10) }</p>
      <div className='flex justify-between flex-wrap'>
        <div className='flex items-center gap-5'>
          <img 
            width={100} 
            src={ octocat } 
            alt="" 
            className='rounded-full'
          />

          <div className='flex flex-col'>
            <p className='text-white text-2xl'>{ nameUser }</p>
            <span className='text-text-secundary mb-2'>@{ loginName }</span>
            <p className='text-white opacity-60 font-extralight'>{ bioProfile }</p>
          </div>

        </div>
      </div>

      <div className='flex flex-col justify-center w-full mt-5'>
        <div className='bg-bg-repos flex justify-between max-w-target py-3 px-5 rounded-xl'>
          <div>
            <p className='text-white opacity-70'>Respos</p>
            <h1 className='text-white text-xl'>{ numberRespos }</h1>
          </div>

          <div>
            <p className='text-white opacity-70'>Followers</p>
            <h1 className='text-white text-xl'>{ followers }</h1>
          </div>

          <div>
            <p className='text-white opacity-70'>Following</p>
            <h1 className='text-white text-xl'>{ following }</h1>
          </div>
        </div>

        <div className='flex gap-5 mt-5 flex-wrap'>
          <div className='flex items-center gap-1'>
            <MdLocationOn color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>{ location }</p>
          </div>

          <div className='flex items-center gap-1'>
            <AiOutlineLink color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>{ url }</p>
          </div>

          <div className='flex items-center gap-1'>
            <AiOutlineTwitter color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>{ twitterUserName }</p>
          </div>

          <div className='flex items-center gap-1'>
            <MdHomeWork color={'white'} size={20}/>
            <p className='text-white opacity-60 text-sm font-extralight'>{ company }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SectionUser }