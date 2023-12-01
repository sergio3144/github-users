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
  create_at: string
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
  

  return (
    <>
      <main className={style.main}>
        <Header/>
        <InputSearch 
          handleChangeData={ handleChangeData }
          handleSubmitData={ handleSubmitData }
        />
        <SectionUser/>
      </main>
    </>
  )
}

export { CompletedApplication }