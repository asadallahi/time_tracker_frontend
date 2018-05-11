import React from 'react';
import timeFormat from '../utils/timeFormat';
import Datetime from 'react-datetime';
import ajax from '../utils/ajax';
import '../assets/css/react-datetime.css';

class TimeRecordForm extends React.Component {

    state ={
        datetime_value:null,
        show_alert:false,
    };
    fromTracker() {
        console.log('from', this.duration.value);
        this.duration.value = timeFormat(this.props.data);
    }

    stringToTime(time_string) {
        //todo: format validation
        let time_array = time_string.split(":");
        let hours = time_array[0] * 3600 * 1000;
        let minutes = time_array[1] * 60 * 1000;
        return hours + minutes + (time_array[2] * 1000);
    }

    async submit() {
        //todo: form validation for duration and date
        //todo: masked input for duration
        if(this.state.datetime_value === null){
            alert('please select a time');
            return false;
        }
        let description = this.description.value;
        if(description === ""){
            alert('please fill the description');
            return false;
        }
        let time = this.stringToTime(this.duration.value);
        if(isNaN(time)){
            alert('please fill the duration');
            return false;
        }

        console.log('desc', description);
        let data = {
            time,
            task_time: this.state.datetime_value.format("YYYY-MM-DD HH:mm:ss"),
            description,
        };

        let response = await  ajax.postData(data);
        if("id" in response){
            this.setState({show_alert:true});
        }
        console.log('response', response);
    }


    render() {
        let self = this;
        return (
            <div>
                {this.state.show_alert? (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Time track Saved
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                ):""}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Book Time for a Task</h5>
                    <div className="card-text">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail4">Description</label>
                                    <textarea
                                        name="Text1"
                                        cols="40" rows="5" id="inputEmail4"
                                        ref={(el) => self.description = el}

                                        className="form-control"
                                    />
                                </div>

                            </div>
                            <div className="form-row align-items-center">
                                <div className="col-sm-6 my-1">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Duration</div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="duration"
                                            ref={(el) => self.duration = el}

                                        />
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => this.fromTracker()}
                                    >
                                        From Time Tracker
                                    </button>
                                </div>
                                <div className="col-sm-4 my-1">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Time</div>
                                        </div>
                                        <Datetime
                                            inputProps={{placeholder: 'Select a time', disabled: false}}
                                            ref={(datetime) => self.datetime = datetime}
                                            onChange={(value) => this.setState({datetime_value: value})}
                                            dateFormat="YYYY-MM-DD" timeFormat={true}
                                        />
                                    </div>
                                </div>

                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => this.submit()}
                            >add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default TimeRecordForm;
