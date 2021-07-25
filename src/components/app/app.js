import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component{

    state = {
        showRandomChar : true
    }
    toggleRandomChar = () => {
        const newShowRandomChar = !this.state.showRandomChar;
        this.setState({showRandomChar:newShowRandomChar});
    };

    render(){
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
