import axios from "axios";
const API_URL_NAME:string = import.meta.env.VITE_URL_GITHUB_NAME;


export const dataUserGithub = async ( nameUser:string ) => {
  const url:string = `${API_URL_NAME}${nameUser}` 
  try {
    const responseData = axios.get(url).then((response) => {
      return response
    })
    return await responseData
  } catch (error) {
    console.log(error)
  }
}
