import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

import Search from './Search';
import Books from './Books';
import NewBook from './NewBook';
import action from './actions/action'

import './App.scss';


function App() {

  /* 
  Approch 1 Logic using funtion state 

  const [ books, setBooks ] = useState([]);
  useEffect( () => {

    //Get IIFE for making to function asyc inside useEffect

    (async ()=>{
      //Object nested Destructuring
      const { data : { items } } = await axios('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
      setBooks(items);
    })();

    }, []); */

  // Approch 2 Logic using redux state
  const books = useSelector( state => state.items );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action('BOOKS'));
  }, []);  
  const filterDataResult = (filterBook) => {
      dispatch({ type: 'FILTER_BOOKS' , payload : {filterBook, books} })
  };
  
  return (
    <Router>
      <div className="App">
        <ul className="row nav"> 
          <li>
            <h2><Link to="/">Book</Link></h2> 
          </li>
          <li className="newbooks">
            <Link className= "btn btn-primary"  to="newbook">Add New Book</Link>
          </li>
        </ul>
        <Route path="/" exact render={() => <section>
            <Search filterData = { filterDataResult } />
            <Books books = { books } />
        </section>} />
        <Route path="/newbook" component={ NewBook } />
      </div>
    </Router>
   
  );
}

export default App;
