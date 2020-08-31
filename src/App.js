import React,{useState} from 'react';
import useFetchNews from './useFetchNews';
import { Container } from 'react-bootstrap';
import Article from './Article'
import './App.css'
import Navbar from './Navbar'
function App() {
 const [params,setParams] = useState({});
 const [page,setPage] = useState(1);

  const {news,loading,error} = useFetchNews(params,page)
  return (
    <div>  
      
      <Navbar/>
    <Container className="container">
    
      {loading && <h1>Loading .....</h1>}
      {error && <h1>Error. Try Refreshing. </h1>}
       {news.map((article,index)=> {
        return <Article key={index} article={article}></Article>
      })}
      </Container>
      </div>
  );
}

export default App;
