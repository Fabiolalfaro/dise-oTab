import React, { Component } from 'react';
import { Header, Icon, Divider, Container, Table, Button, TableFooter } from 'semantic-ui-react';
import { render } from '@testing-library/react';
import Formulario from './Formulario'


class Tabla extends Component{
    constructor(props){
        super(props);
        this.state = {
            registro: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        
        return(
            <div className="conteiner">
              <Formulario />
            </div>
      
          )
    }


    render(){
        return (
            <div>
            <Header as="h2" icon textAlign="center">
                <Icon name="book" circular />
                <Header.Content>RegistroApp</Header.Content>
            </Header>
            <Divider></Divider>
            <Container textAlign="center">
                <Table fixed>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Apellido</Table.HeaderCell>
                    <Table.HeaderCell>Edad</Table.HeaderCell>
                    <Table.HeaderCell>Ocupacion</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Juan</Table.Cell>
                        <Table.Cell>Renderos</Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>Estudiante</Table.Cell>
                        <Table.Cell>
                            
                        <Button animated color="green">
                            <Button.Content visible>
                            <Icon name="edit outline" />
                            </Button.Content>
                        </Button>
            
                        <Button animated color="red">
                            <Button.Content visible>
                            <Icon name="trash alternate" />
                            </Button.Content>
                        </Button>
            
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>


        
                </Table>

                <Button animated color="primary" onClick={this.handleClick} >
                    <Button.Content visible>
                        Agregar
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name="save" />
                    </Button.Content>
                </Button> 
            </Container>
        
            
            </div>
            )
    }
}

export default Tabla;

