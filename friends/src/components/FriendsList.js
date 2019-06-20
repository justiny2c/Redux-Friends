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
                    <div>{this.friend}</div> )
                })}

            </div>
        )
    }


}

const mapStateToProps = ({ friends }) => ({
    friends
})

export default connect (
    mapStateToProps, { getData })(FriendsList)