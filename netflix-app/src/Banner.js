import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './requests'
function Banner() {
const [movie,setMovie]=useState([])//ande image enkebelalen movie belnwale 
 useEffect(()=>{//fetch sendege use effect new mentkemwe
    async function  fetchData(){
const request = await axios.get(requests.fetchNetflixOriginas)//async awiye tekmen fetch adergen
    setMovie(request?.data.results[//?optonal chaining yebalae
            Math.floor(Math.random()* request.data.results.length)//random (0-1)(number  pik yadergelnena ke lengetu gar yabazalena (math.floor endergalen mulu kutere selmenfelge ) 
        ]
    )
    return request
    }
    fetchData()// fetchdata function weste selalece entertalen
},[]) //one time selhone depndency ancetkem 1 beca render endiyaderge new menfelgew
// console.log(movie)
function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+ "...":str //strung and number yewedale stringe lengthu ke kuter keblte yekruten astrewna dot dot cemerlge kalhone gen stringu ametaleg
}
  return(
    <header
    className="banner"style={{
      background:"cover", 
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
    }}
   >
  <div className='banner_contents'> 
<h1 className='banner_title'>
  {/* ke 3 option andun aderglge eyalen new or sentekem || ke 3 andu */}
    {movie?.title|| movie?.name || movie.original_name} 
</h1>

<div className='banner_buttons'>
    <button className='banner_button'>play</button>
    <button className='banner_button'>My List</button>
</div>
sufu eyketle yehdale lemalet truncate entkemale
<h1 className="banner_description">
  {truncate(movie?.overview, 150)}</h1> 
  {/* 150 fidele laye stdrsekeza belaye yalwen astarewna dot dot asegbawe */}
  </div>
<div  className='banner_fadeBottom'/>
</header>
  )
}
export default Banner 