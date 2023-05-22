import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greating extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            age : 20      
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name} !
                </h1>
                <h2>
                    tienes {this.state.age} Años :0
                </h2>

                <div>
                    <button onClick={this.birthday}>                    
                        Es tu cumple?
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        
        this.setState((prevState) =>(
            {
                age: prevState.age +1
            }
        ))
    }
}


Greating.propTypes = {
    name: PropTypes.string,
};


export default Greating;

