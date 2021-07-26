import React, {Component} from 'react';
import './characterPage.css';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class characterPage extends Component {
	
	state = {
		selectedChar: null
	}
	
	onCharSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	}
	
	render(){
	    return (
                    <Row>
                        <Col md='6'>
                            <ItemList  onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
		)	
	}

    
}
