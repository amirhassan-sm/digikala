import config from "../configuration/configure.json"
export const GET = async (url) => {
    

  return fetch(`${config.API}${url}`,{cache:"force-cache"})

}





