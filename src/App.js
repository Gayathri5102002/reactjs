import './App.css';

import News from './component/News';
import { useEffect, useState } from 'react';
import "./component/News.css"

function App() {

  let [articles, setarticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=india&from=2023-12-09&apiKey=9263bdb8eeb740dbba5b973e9b907dfc`)
      .then((response) => response.json())
      .then((news) => {
        setarticles(news.articles);
        console.log(news.articles)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (

    <div className="App">
      <header className='header'>
        <h1>Parso Tak</h1>
        <input type="text" placeholder='Search News'></input>
      </header>

      <section className="newsarticle">

      {articles.map((article) => {
          return (
            <News article={article} />

          )
        })}



      </section>
    </div>

  );
}


export default App;
