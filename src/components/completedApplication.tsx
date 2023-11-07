import { Header } from "./header/header"
import style from './completedApplication.module.scss'
import { InputSearch } from "./input/inputSearch"


const CompletedApplication = ():JSX.Element => {
  return (
    <>
      <main className={style.main}>
        <Header/>
        <InputSearch/>
      </main>
    </>
  )
}

export { CompletedApplication }