import React, {Component} from 'react';
import Header from './Header';
// import moment from 'moment';
import LineChart from './LineChart';
// import ToolTip from './ToolTip';
// import InfoBox from './InfoBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingData: true,
            data: null,
            hoverLoc: null,
            activePoint: null
        }
    }


    getData() {
        return fetch('https://api.coindesk.com/v1/bpi/historical/close.json', {
            method: 'get',
            dataType: 'json'
        })
    }

    componentDidMount() {

        this.getData().then(response => response.json())
            .then((bitcoinData) => {
                const sortedData = [];
                let count = 0;
                for (let date in bitcoinData.bpi) {
                    sortedData.push({
                        // d: moment(date).format('MMM DD'),
                        p: bitcoinData.bpi[date].toLocaleString('us-EN', {
                            style: 'currency',
                            currency: 'USD'
                        }),
                        x: count, //previous days
                        y: bitcoinData.bpi[date] // numerical price
                    });
                    count++;
                }

                this.setState({
                    data: sortedData,
                    fetchingData: false
                });
                console.log(this.state.data)
            })
            .catch((e) => {
                console.log(e);
            });
    }


    render() {
        const {data} = this.state;
        return (
            <div className='container'>
                <div className='row'>
                    <Header/>
                    <h1>30 Day Bitcoin Price Chart</h1>
                </div>
                <div className="row">
                    <div className='chart'>
                        { !this.state.fetchingData ?
                            <LineChart data={this.state.data}
                                       // onChartHover={ (a, b) => this.handleChartHover(a, b) }
                            />
                            : null }
                    </div>
                </div>
            </div>
        );
    }
}
export default App;