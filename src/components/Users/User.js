import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../layout/Spinner';
import Repos from '../repos/Repos';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }


    render() {

        const {
            name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company
        } = this.props.user
        const { loading, repos } = this.props

        if (loading) {
            return <Spinner />
        }
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
                <div className="card grid-1">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt={login} style={{ width: '150px' }} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                </div>
                <div style={{ padding: '0px 50px' }}>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>{login && <Fragment>
                            <strong>Name: </strong> {login}
                        </Fragment>}</li>
                        <li>{company && <Fragment>
                            <strong>Company: </strong> {company}
                        </Fragment>}</li>
                        <li>{blog && <Fragment>
                            <strong>Website: </strong> {blog}
                        </Fragment>}</li>
                    </ul>
                </div>
                <div className="card text">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-primary">Public_Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public_Gists: {public_gists}</div>
                </div>
                <Repos repos={this.props.repos} />
            </Fragment>
        );
    }
}

export default User;
