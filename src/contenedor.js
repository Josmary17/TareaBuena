import  React , { Component } from 'react' ;
  

import  Login  from './login';
import  Inicio from './inicio';
 

class  Contenedor extends Component {

     constructor (props){
        super (props);

    
         this.state = {
            vista: 'Login',
            values:''
        };
    }

    cambiarPantalla  = () => {
        (this.state.vista=='Login')?
        this.setState({
            vista:'Inicio'
        }) :
        this.setState({
            vista:'Login'
        })

    };

    handletext = (informacion) => {
        this.setState({
            values:informacion,
        });

    }
    render () {

       

        if (this.state.vista === 'Login') {
            return (
                < Login
                    cambiarPantalla = { this.cambiarPantalla }
                    cambiarText ={this.handletext}
                />
            );
        }

        if (this.state.vista === 'Inicio' ) {
            return (
                < Inicio
                    cambiarPantalla = {this.cambiarPantalla}
                    nombre = {this.state.values}
                />
            );
        }

    }

}

export default Contenedor; 