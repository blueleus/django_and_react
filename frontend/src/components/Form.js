import React, {Component} from "react";
import PropTypes from "prop-types";

class Form extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        title: "",
        text: ""
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {title, text} = this.state;
        const post = {title, text};
        const conf = {
            method: "post",
            body: JSON.stringify(post),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response));
    };

    render() {
        const {title, text} = this.state;
        return (
            <div className="column">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="title"
                                onChange={this.handleChange}
                                value={title}
                                required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Text</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="text"
                                onChange={this.handleChange}
                                value={text}
                                required/>
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">
                            Send post
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;