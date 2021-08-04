import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage} from '../pages';

import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component{

    gotService = new gotService();

    state = {
        showRandomChar: true,
		error: false
    }
	
	componentDidCatch(){
		console.log("error");
		this.setState({
			error: true
		})
	}

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render(){
        if(this.state.error){
            return <ErrorMessage/>
        }
      const randomCharContent = this.state.showRandomChar ? <RandomChar/> : null;
	  
	  
	  
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 6, offset: 0}}>
                                {randomCharContent}
                                <button
                                    className = 'btn btn-primary'
                                    onClick = {this.toggleRandomChar}
                                >Toggle Random Char</button>
                            </Col>
                        </Row>

                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} />
                        <Route path='/houses' component={HousesPage} />

                    </Container>
            </div>
            </Router>
        );
    }
};
