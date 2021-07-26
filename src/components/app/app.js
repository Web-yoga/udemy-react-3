import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';


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
        const newShowRandomChar = !this.state.showRandomChar;
        this.setState({showRandomChar:newShowRandomChar});
    };

    render(){
      const randomCharContent = this.state.showRandomChar ? <RandomChar/> : null;
	  
	  if(this.state.error){
		  return <ErrorMessage/>
	  }
	  
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
					</CharacterPage>
                </Container>
            </>
        );
    }
};
