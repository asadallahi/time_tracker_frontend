import React from 'react';
import Timer from "./Timer";

class TimeTracker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            started: false,
            time: 0
        };
        this.timer_reference = null;
    }

    getData(event) {
        this.props.callback(this.state.time);
        console.log('get time',this.state.time);
    }

    updateTimer(extraTime) {
        const {time} = this.state;
        this.setState({time: time + extraTime});
        this.getData(this);
    }

    startPause = () => {
        if (this.state.started) {
            this.setState({
                started: false
            }, () => {
                clearInterval(this.timer_reference);
            });
        } else {
            this.setState({
                started: true
            }, () => {
                this.timer_reference = setInterval(
                    () => {
                        this.updateTimer(1000)
                    }, 1000
                )
            });
        }

    };

    render() {
        return (
            <div className="">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button"
                            onClick={() => this.startPause()}
                            className="btn btn-primary"
                    >
                        {this.state.started ? "Stop" : "Start"}
                    </button>
                    <button type="button" className="btn btn-outline-info disabled"><Timer time={this.state.time}/></button>
                </div>

            </div>
        );
    }
}

export default TimeTracker;
