import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import PanelHeading from './PanelHeading';


export default class BuySell extends Component {

	constructor(props) {
		super(props);
		this.state={
			open: false,
			//price: []
		}
	}

	componentWillReceiveProps(nextProps) {
   // this.setState({open: nextProps.open, articles: [...nextProps.articles]});
  }

  toggleExpand() {
		this.setState({open: !this.state.open});
	}

	render() {

		return (

			<div className="panel panel-default">
				<PanelHeading toggle={this.toggleExpand.bind(this)} glyph='fire' title='Buy/Sell'/>
        <Collapse in={this.state.open}>
        	<div className="panel-body">
        		//buy/sell
        	</div>
        </Collapse>
    	</div>

		)
	}

}