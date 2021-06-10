import React, {Component} from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndices: [],
        values: {},
        index: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndex();
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({values: values.data});
    }

    async fetchIndex() {
        const index = await axios.get('/api/values/all');
        this.setState({seenIndices: index.data});
    }

    renderSeenIndices() {
        return this.state.seenIndices.map(({number}) => number).join(', ');
    }

    render() {
        return (
            <div>
                <form>
                    <label>Enter your index: </label>
                    <input/>
                    <button>Submit</button>
                </form>

                <h3>Indices I have seen: </h3>
                {this.renderSeenIndices()}
                <h3>Calculated value</h3>
            </div>
        )
    }
}