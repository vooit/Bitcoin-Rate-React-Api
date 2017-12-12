import React, {Component} from 'react';
// import LineChart from './LineChart';
// import ToolTip from './ToolTip';
// import InfoBox from './InfoBox';
import Header from './Header';


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
                const sortedData = [];

                console.log(Response.json);
                console.log(data.bpi);


                this.setState({
                    data: sortedData,
                    fetchingData: false
                })

            })
            .catch(function (err) {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="App">
                <Header/>


            </div>
        );
    }
}

export default App;
