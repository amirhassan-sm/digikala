import config from "../configuration/configure.json"
 export const GET=(url)=>{
    return fetch(`${config.API}${url}`)

}




