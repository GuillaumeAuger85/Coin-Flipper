import React, { Component } from 'react'
import  Coin  from './Coin';
import { choice } from './helpers';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'head', imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg' },
            { side: 'tail', imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg' }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            curCoin: this.props.coins[0],
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                curCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'head' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tail' ? 1 : 0),
            };
        });
    }
    handleClick(e) {
        this.flipCoin()
    }
    render() {
        return (
            <div className='CoinContainer'>
                <h1>Lets flip a coin!</h1>
                {this.state.curCoin && <Coin data={this.state.curCoin} />}
                <button onClick={this.handleClick}>FLIP MEEEE!</button>
                <p>Out of {this.state.nFlips} flips , thre have beeen {this.state.nHeads} heads and {this.state.nTails} tails </p>
            </div>
        )
    }
}

export default CoinContainer