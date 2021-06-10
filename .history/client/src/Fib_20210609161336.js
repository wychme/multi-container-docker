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

    render() {
        return (
            <div>
                <form>
                    <label>Enter your index: </label>
                    <input/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}