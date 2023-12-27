import Row from "./Row";
import "./App.css"
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row //props enaslefalne yetleye selhone title
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginas }// ke request weste feturenetiflexorignal endimetalen adergen object selhone dot entkemalen
      isLargeRow // yemegemeria mesermr laye yalut teleke endihonu
      />
       <Row 
      title="Trending Now" 
      fetchUrl={requests.fetchTrending}/>
       <Row 
      title="Top Rated" 
      fetchUrl={requests.fetchTopRatedMovies}/>
      <Row 
      title="Action Movies" 
      fetchUrl={requests.fetchActionMovies}/>
       <Row 
      title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>
       <Row 
      title="Horror Movies" 
      fetchUrl={requests.fetchHorrorMovies}/>
       <Row 
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}/>

      <Row title="Documentaries Movies"
      fetchUrl={requests.fetchDocumentaries}/>
      

      <Row title="DramaMovies Movies"
      fetchUrl={requests.fetchDramaMovies}/>
    </div>
  );
}

export default App;
