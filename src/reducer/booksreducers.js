const intialState = {
    items: []
};
let serverData = {};

export default function bookReducer ( state = intialState, action ) {
    switch ( action.type ) {
        case 'BOOKS':
            serverData = {...state, items: action.items};
            return {...state, items: action.items}
        case 'FILTER_BOOKS':
            const filterState = serverData.items.filter( ({ volumeInfo } ) => {
                return volumeInfo.authors.filter( au => au.startsWith(action.payload.filterBook)).length
                    || volumeInfo.title.startsWith(action.payload.filterBook) 
                    || volumeInfo.publisher && volumeInfo.publisher.startsWith(action.payload.filterBook) ;
            });
            return {...state , items: filterState}
        case 'ADD_BOOK': 
            const newItems = [ ...serverData.items]
            newItems.unshift({
                id: Math.floor(Math.random()), 
                volumeInfo: action.payload
            });
            // Updating ServerData
            serverData.items = newItems;
            return {...state , items: newItems}
        default:
            return state
    }
}
