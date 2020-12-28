import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload: false
});


export const fetchPizzas = (sortBy, name) => (dispatch)  => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${name !== null ? `name=${name}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then (({data}) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});
