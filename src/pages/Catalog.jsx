import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/actions/pizzas';
import {setName, setSortBy} from '../redux/actions/filters';
import {SortPopup, PizzaBlock, LoadingBlock} from '../components/';

const sortItems = [{name: 'популярности', type : 'popular', order: 'desc'},{name: 'ценe', type: 'price', order: 'desc'},{name: 'алфавиту', type: 'name', order: 'asc'}];

function Catalog() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {name, sortBy} = useSelector(({filters}) => filters);
    const [title, setTitle] = React.useState('');

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, name));
    }, [name, sortBy]);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const onSelectName = (event) => {
      event.preventDefault();
      if (title === '') {
        alert('Заполните поле "тег"');
      } else {
        dispatch(setName(title));
      }
    }

    const getAllPizzas = () => {
      dispatch(setName(null));
    }

    const onValueChange = (event) => {
      setTitle(event.target.value.replace(/[^а-я]/g, ''));
      console.log(title);
  }

    return(
      <div className="container">
        <div className="content__top">
          <form onSubmit={onSelectName} className="header"> 
              <input
                onChange={onValueChange}
                value={title}
                type="text"
                placeholder="Введите название пиццы"
                className="header__input"
              />
              <button  className="header__button" type="submit">
                Поиск
              </button>
              <button onClick={getAllPizzas}  className="header__button" type="button">
                Все пиццы
              </button>
          </form>
          <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
        </div>
        <div className="content__items">
          {isLoaded ? 
            items.map(obj => 
            <PizzaBlock  
            key={obj.id} 
            {...obj}/>) : 
            Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
          }
        </div>
      </div>
    )
}

export default Catalog;