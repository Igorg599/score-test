import React from 'react';

import { Link } from 'react-router-dom';


function PizzaBlock(obj) {
    const {imageUrl, name} = obj;
    return (
        <div className="pizza-block">
            <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
            </div>
            <div className="pizza-block__bottom">
                <Link to={{pathname: "/product",
                    propsSearch: obj
                    }}>
                    <button className="button" outline>
                        <span>Выбрать</span>
                    </button>                
                </Link>
            </div>
        </div> 

    )
}

export default PizzaBlock;