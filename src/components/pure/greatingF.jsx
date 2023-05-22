import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreatingF = (props) => {

// *const [ variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(20);

    const birthday = () =>{
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                Hola {props.name} desde funciones uwu!
            </h1>
            <h2>
                tienes {age} Años :0
            </h2>

            <div>
                <button onClick={birthday}>                    
                    Es tu cumple?
                </button>
            </div> 
        </div>
    );
};


GreatingF.propTypes = {
    name: PropTypes.string
};


export default GreatingF;
