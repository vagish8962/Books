import axios from 'axios';

 const result = type => {
    return async dispatch  => {
        const { data : { items } } = await axios('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
        dispatch({items, type});
    }
};

export default result ;