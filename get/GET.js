import config from "../configuration/configure.json"
const GET=(url)=>{
    return fetch(`${config.API}${url}`)

}
export default GET