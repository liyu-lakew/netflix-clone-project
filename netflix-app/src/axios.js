import axios from "axios"//make requests to either their own or a third-party server to fetch data
const instance = axios.create({
   baseURL:"https://api.themoviedb.org/3",
})
export default instance //export default instance belen semese kestenew yetem bota tertne metkem encelaleb were ever import sendargr we can change instance yemilwen name deault expot kehone