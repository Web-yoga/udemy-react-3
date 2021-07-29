import React, {Component} from 'react';
import './characterPage.css';
import {Col, Row} from 'reactstrap';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {
	gotService = new gotService();
	
	state = {
		selectedChar: 100,
		error: false
	}
	
	onCharSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	}
	
	componentDidCatch(){
		this.setState({
			error: true
		})
	}

	render(){
	
		if(this.state.error){
            return <ErrorMessage/>
        }
		
	    return (
                    <Row>
                        <Col md='6'>
                            <ItemList  
								onCharSelected={this.onCharSelected}
								getData ={this.gotService.getAllCharacters} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
		)	
	}

    
}
