import React from 'react';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

function Product(obj) {
    console.log(obj.location.propsSearch);
    if (!obj.location.propsSearch) return <Redirect to="/"/>;
    return (
        <div className="container">
            <div className="product">
                <Link to="/">
                    <button className="product__button" type="button">
                        Вернуться на главную
                    </button>               
                </Link>
                <h2>пицца {obj.location.propsSearch.name}</h2>
                <img alt="product" src={obj.location.propsSearch.imageUrl}/>
                <div className = "product__descr">{obj.location.propsSearch.descr}</div>
                <div className = "product__price">{obj.location.propsSearch.price} ₽</div>

            </div>
        </div>
    )
}

export default Product;