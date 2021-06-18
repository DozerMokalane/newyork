import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
    const [articles, setArticles] = useState([])
    const [term, setTerm] = useState('everything')
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() =>{
      const fetchArticles = async () => {
      try{
       
          const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=Wv8ywNEZhPKAfybzxCnkN6YiNOkZGGBS`
          )
          const articles = await res.json()
          console.log(articles.response.docs)
          setArticles(articles.response.docs)
        } catch (error){
          console.error(error);
      } 
      }
     fetchArticles()
    
    }, [])

  return (
    <div className="App">
      <Navbar/>
      <section className="articles_all">
 
 {articles.map((article) =>{
 const {abstract,
   headline: {main},
    byline:{original},
    lead_paragraph,
    pub_date,
    web_url,
    _id} = article
 return (

  <div className="news">
  
   <article key={_id}>
   <h2>{main}</h2>
   <p>{pub_date}</p>
   <p> {original}</p>
   <a href= {web_url} target="_blank">Read more</a>
    
   </article>
  
   </div>
 )
 })}
</section>

          
    </div>
    
  );
}

export default App;
