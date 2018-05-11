import React from 'react';
import ajax from "../utils/ajax";
import timeFormat from "../utils/timeFormat";

class List extends React.Component {

    state = {
        list: null,
        is_loading: true,
    };

    async componentDidMount() {
        let list = await ajax.getList();
        this.setState({
            list,
            is_loading: false
        });
        console.log('list', list);
    }

    async search() {
        let search_term = this.search_term.value;
        let list = await ajax.getList(search_term);
        this.setState({
            list,
            is_loading: false
        });

    }

    render() {
        if (this.state.is_loading) {
            return (<div>Loading...</div>)
        } else {
            let self = this;
            return (
                <div className="sha-margin">
                    <form className="form-inline my-2 my-lg-0 sha-margin">
                        <input className="form-control mr-sm-2"
                               type="search"
                               placeholder="Search in Descriptions"
                               aria-label="Search"
                               ref={(el) => self.search_term = el}

                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="button"
                            onClick={() => this.search()}

                        >
                            Search
                        </button>
                    </form>
                    <div>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <div className="card sha-margin" key={index}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.task_time}</h5>
                                            <div className="card-text">
                                                {item.description}
                                            </div>
                                            <div className="card-link">{timeFormat(item.duration)}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
    }
}

export default List;
