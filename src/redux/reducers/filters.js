const initialState ={
    name: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if (action.type === 'SET_NAME') {
        return {
            ...state,
            name: action.payload,
        }
    }
    return state;
};

export default filters;