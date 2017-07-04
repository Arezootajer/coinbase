import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../styles/page-header.css';


export default () => {
	return (
		<Jumbotron bsClass='page-header'>
      <h1>
      <img src="assets/images/coin.png" alt="Bit_coin_Buddy" height="50" width="50"/>
				Welcome To Bit Coin!</h1>
      <div className="page-header__badge">
          	<img src="assets/images/BitCoin_Buddy_logo.png" alt="Bit_coin_Buddy" height="150" width="400"/>
      </div>
      <div>
      </div>
      <div>
      <h2>Login using: </h2>
        <Button bsStyle="primary" bsSize="large">Facebook</Button>

        <Button bsStyle="info" bsSize="large">Twitter</Button>

        <Button bsStyle="danger" bsSize="large">google</Button>
        </div>
    </Jumbotron>
  )
}