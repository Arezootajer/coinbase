import React, { Component } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Chart from './Components/Chart';
import BuySell from './Components/BuySell';



//client side socket connection
import io from 'socket.io-client'; 
const socket = io(); 

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			formOpen: false,
			resultsOpen: false,
			favoritesOpen: false,
			articles: [],
			favoriteArticles: [],
			newArticle: {}
		}
		socket.on('new-save', () => this.getSavedArticles());
		this.getSavedArticles = this.getSavedArticles.bind(this);
	}

	componentWillMount() {
		this.getSavedArticles();
	}

	getSavedArticles() {
	
	}

	getArticles(queryURL){
		fetch(queryURL)
		.then(response => response.json())
		.then(data => this.setState({formOpen: false, resultsOpen: true, articles:[...data.response.docs]}));
	}

  render() {
    return (
      <div className="App">
        <div className="container">

        	<Header/>

        

	        <Profile 
	        	open={this.state.formOpen} 
	        	callFetch={this.getArticles.bind(this)}
	        />

	        <Chart
	        	open={this.state.resultsOpen} 
	        	articles={this.state.articles} 
	        />

	        <BuySell
	        	open={this.state.favoritesOpen}
	        	articles={this.state.favoriteArticles}
	        />

	      </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
