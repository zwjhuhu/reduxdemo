import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }

    increment = () => {
        const number = ~~this.select.value
        this.props.increment(number)
    }

    decrement = () => {
        const number = ~~this.select.value
        this.props.decrement(number)
    }

    incrementIfOdd = () => {
        const number = ~~this.select.value
        const count = this.props.count
        if(count % 2 === 1){
            this.props.increment(number)
        }
    }

    incrementAsync = () => {
        const number = ~~this.select.value
        this.props.incrementAsync(number)
    }

    render () {
        const count = this.props.count
        return (
            <div>
                <p>click {count} items</p>
                    <div>
                        <select ref={select => this.select = select}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        &nbsp;
                        <button onClick={this.increment}>+</button>
                        <button onClick={this.decrement}>-</button>
                        <button onClick={this.incrementIfOdd}>increment if odd</button>
                        <button onClick={this.incrementAsync}>increment async</button>
                    </div>
            </div>
        )
    }
}
