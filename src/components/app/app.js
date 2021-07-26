import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


export default class App extends Component{

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
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharContent}
                            <button
                                className = 'btn btn-primary'
                                onClick = {this.toggleRandomChar}
                            >Toggle Random Char</button>
                        </Col>
                    </Row>
					<CharacterPage/>
                </Container>
            </>
        );
    }
};
