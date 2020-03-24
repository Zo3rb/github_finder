import React from 'react';
import UserItem from './UserItem';
import Spinner from '../../layout/Spinner';
import PropTypes from 'prop-types';

const Users = props => {

    const { users, loading } = props

    const renderUsers = (users, loading) => {
        if (loading) {
            return <Spinner />
        }
        return (
            users.map(user => {
                return <UserItem key={user.id} user={user} />
            })
        )
    }

    return (
        <div style={userStyle}>
            {renderUsers(users, loading)}
        </div>
    );
}

// Styling The Cards With The Grid System for The Sake of Style Variable
const userStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users;
