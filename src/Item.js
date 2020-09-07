import React from 'react';

function Item(props) {
    return (
        <div className="item">
            
            <div className="image">
                <img src={require('../public/img/' + props.image)} width="100%" alt="foto varia"/>
            </div>
            
            <div className="title">
                {props.title}
            </div>

            <div className="rating">
                <p>

                </p>
                Calificación:
                <select value={props.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

        </div>
    );
}

export default Item;