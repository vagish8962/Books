import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewBook = ( props ) =>  {
    const dispatch = useDispatch();
    const [message, setmessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        if (data.get('Authors') === '' ||
            data.get('Publisher') === '' ||
            data.get('title') === '' ||
            data.get('publishedDate') === ''){
            setmessage('Please fills all the enteries');
            return;
        }
        dispatch({
            type: 'ADD_BOOK',
            payload: {
                authors: [data.get('Authors')],
                title:  data.get('title'),
                publisher: data.get('Publisher'),
                publishedDate: data.get('publishedDate'),
            }
        });
        props.history.push('/');
      }
        return(
            <div id="addbook">
                <h3>Add new Book</h3>
                <hr />
                <br />
                <div className="container">
                <b style ={{color:'red'}}>{message}</b>
                <form  onSubmit={handleSubmit} >
                    <label htmlFor ="title">Title</label>
                    <input type="text" id="title" name="title" />
                    <label htmlFor ="Authors">Authors</label>
                    <input type="text" id="Authors" name="Authors" placeholder="Authors comma seperated" />
                    <label htmlFor ="Publisher">Publisher</label>
                    <input type="text" id="Publisher" name="Publisher" />
                    <label htmlFor ="publishedDate">Published Date</label>
                    <input type="date" id="publishedDate" name="publishedDate" />
                    <input 
                        type="submit" 
                        value="Submit" 
                        className ="btn-primary btn"
                       />    
                </form>
                </div>
            </div>
        )
    };

export default NewBook;