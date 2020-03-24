import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: ''
    }

    onInputChange = e => this.setState({ [e.target.name]: e.target.value })
    onFormSubmit = e => {
        e.preventDefault()
        if (this.state.text === '') {
            this.props.setAlert("You Have to Add Word to Search it", "light")
        }
        else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="form">
                    <input onChange={this.onInputChange}
                        value={this.state.text}
                        type="text"
                        name="text"
                        placeholder="Search Users ..."
                        autoComplete="off"
                    />
                    <input className="btn btn-dark btn-block" type="submit" value="Search" />
                    {this.props.showClear && (
                        <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
                    )}
                </form>
            </div>
        );
    }
}

export default Search;