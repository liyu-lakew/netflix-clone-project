import React, { useState,useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Row.css'
import axios from './axios'// axios tekemen requset enadergalen
const base_url ="https://image.tmdb.org/t/p/original"// base url seten yemiketlwen img seme ensetalen
function Row({ title,fetchUrl, isLargeRow //ende property tkeblnaln
}) {// app js row laye pass yadernwen  props ezi  methen enkeblwalne 
  //props keande hulte beye sinorn eyandandun mamete senfelge distracture arrey multiple values from data (title,fetchUrl, isLargeRow enzine ende props enkebelwalne)

  // state variable masekemeca 
 const [movies, setMovies]=useState([])//use state hulte arrye temeslce andu stetun andu stete update madergiyawen 
 const [trailerUrl, setTrailerUrl]=useState("")
useEffect(()=>{// useEffect bemetekm  
  async function fetchData(){ // promise
    const request = await axios.get(fetchUrl) //base url ena requst laye yalwen fteurl yametalena
    console.log(request.data.results)//weste yalwen data yezolen yemetale .data beca new menfelgew
    setMovies(request.data.results)//data set Moves laye enasekmetalen
    return request
    
  }
  fetchData()
},[fetchUrl])//fetchurl dependency asegbetnale b/c selmekeyaer url
//degagemen run lemaderge eyekeyayer ande le orginal,le trande eyale ,[fetchUrl] enaskmetaln
const opts ={
  height:"390",
  width:"100%",
  playerVars:{
    autoplay:1,
  }



}

const handleClick =(movie)=>{
  if(trailerUrl){
    setTrailerUrl("")
    // trailerUrlkale wede sete melsen emtity aderglen
  }else{
    movieTrailer(movie?.title || movie?.name ||movie.original_name)
     .then((url)=>{ 
      //url yalbet ke YouTubelaye yametalnale
      const urlParams =new URLSearchParams(new URL(url).search)
       setTrailerUrl(urlParams.get("v")) //video  idewen agene
    })
    .catch((error)=>console.log(error))
  }                                                                                            
}


// console.log(movies)
return (
  <div className="row">
    <h1>{title}</h1>
    <div className="row_posters">
    {movies.map((movie)=>( // movie yemibalwen arrey map enaderg eyandandun map yewesden be img bemibalwe tag reander enaderg
    <img
    onClick={()=>handleClick(movie)}
    className={`row_poster ${isLargeRow && "row_posterLarge"}`}// rowposter yemile class name yenurew islargerow yemile siyage row_posterLarge yemileclass name cemerlge

//render senaderge base url laye poster path enasegbane img lemagyet
     src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`}
    alt={movie.name}// terneypoerter if else new yehy //islaregrow kehone poster tetkemlge kalhone gen backdroup path tetkemlge 
    />
    ))}
    </div>
    <div style={{padding:"40px"}}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} 
      {/* trailerUrl false kehone vido ayemta */}
      {/* //option mlte new opts   */}
    </div>
  </div>
)
}

export default Row