import React, { Component } from 'react';
import { Input, Form,} from 'semantic-ui-react';

import { render } from '@testing-library/react';


class Formulario extends Component{
    constructor(){
        super();
    }



    render(){

        return (
            <div>
                <form>
                <Input id="standard-basic" label="Standard" />
                <Input id="filled-basic" label="Filled" variant="filled" />
                <Input id="outlined-basic" label="Outlined" variant="outlined" />
                </form>

            </div>
        );
            
    }

}

export default Formulario;
