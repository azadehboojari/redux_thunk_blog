import React from 'react';
import {connect } from 'react-redux';

class UserHeader extends React.Component {

    render(){
        // const user = this.props.users.find((user)=>user.id=== this.props.userId)
        const {user} = this.props;
        if (!user) {
            return null;
        }
        return <div className='header'> {user.name}</div>
    }
}
const mapStateToProps= (state, ownProps) =>{
    // instead of having our component give use the specific user that 
    // we are looking for, we do the process of finding user Id 
    // in this function
    // ownProps::: its a refrence to props that about to be in component
    return {user: state.users.find(user => user.id=== ownProps.userId) }
}

export default connect (mapStateToProps)(UserHeader);