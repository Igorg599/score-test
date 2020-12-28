export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order},
});

export const setName = (name) => ({
    type: 'SET_NAME',
    payload: name,
});