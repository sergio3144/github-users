import { Header } from "./header/header"
import style from './completedApplication.module.scss'
import { InputSearch } from "./input/inputSearch"
import { SectionUser } from "./sectionUser/sectionUser"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { dataUserGithub } from "./util/services"

type DataInformation = {
  name:string,
  login:string,
  bio:string,
  created_at: string,
  public_repos: number,
  followers: number,
  following: number, 
  location: string,
  twitter_username: string,
  html_url: string,
  company: string, 
}

const CompletedApplication = ():JSX.Element => {

  const [ valueDataText, setValueDataText ] = useState<string>('')
  const [ dataInput, setDataInput] = useState<DataInformation>();

  const handleChangeData = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValueDataText(event.target.value)
  }

  const handleSubmitData = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(valueDataText) {
      const responseDataSubmit = await dataUserGithub(valueDataText);
      setDataInput(responseDataSubmit?.data)
    }
  };

  /* useEffect(() => {
    console.log(dataInput?.login)
  }, [dataInput]) */

  console.log(dataInput)
  

  return (
    <>
      <main className={style.main}>
        <Header/>
        <InputSearch 
          handleChangeData={ handleChangeData }
          handleSubmitData={ handleSubmitData }
        />
        <SectionUser
          nameUser={ dataInput?.name }
          loginName={ dataInput?.login }
          bioProfile={ dataInput?.bio }
          numberRespos={ dataInput?.public_repos }
          followers={ dataInput?.followers }
          following={ dataInput?.following }
          location={ dataInput?.location }
          url={ dataInput?.html_url }
          twitterUserName={ dataInput?.twitter_username }
          company={ dataInput?.company }
          created_at={ dataInput?.created_at }
        />
      </main>
    </>
  )
}

export { CompletedApplication }