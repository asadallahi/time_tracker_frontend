import React from 'react';
import TimeRecordForm from "./TimeRecordForm";
import TimeTracker from "./TimeTracker";

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    fromTimeTracker(params) {
        this.setState({
            data: params
        });
        console.log('time',this.state.data);
    }

    render() {
        return (
            <div className="content">
                <TimeTracker callback={this.fromTimeTracker.bind(this)}/>
                <TimeRecordForm data={this.state.data}/>
            </div>
        );
    }
}

export default Content;
