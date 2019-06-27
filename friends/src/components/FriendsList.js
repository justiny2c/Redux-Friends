import React from "react";
import {connect} from "react-redux";

import { getData } from "../actions";

class FriendsList extends React.Component {
    componentDidMount(){
        this.props.getData();
    }

    render(){
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                    <div>{friend.name}</div> )
                })}

            </div>
        )
    }


}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends
})

export default connect (
    mapStateToProps, { getData })(FriendsList)