import React, {Component} from 'react';
// import LineChart from './LineChart';
// import ToolTip from './ToolTip';
// import InfoBox from './InfoBox';
import Header from './Header';
import ListItem from './ListItem';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetchingData: true
        }
    }

    getData() {
        const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
        return fetch(url, {
            method: 'get',
            dataType: 'json'
        })
    }

    componentDidMount() {
        this.getData()
            .then((Response) => Response.json())
            .then((data) => {
                const dupa = data.bpi;

                let sortedData = dupa.map(a => a.foo);

                this.setState({
                    data: sortedData,
                    fetchingData: false
                })
                // console.log(data.bpi) //ok
                // console.log(sortedData)
                // console.log(this.state.data)  // empty array
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    renderBitcoinHistory() {
        return  <div>tiruriru</div>

    }

    render() {
        const {data} = this.state;
        return (
            <div className="App">
                <Header/>
                {this.renderBitcoinHistory()}
                <ListItem/>
                <div>{data}</div>
            </div>
        );
    }
}

export default App;
