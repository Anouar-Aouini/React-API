import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const UserList = ({id,name,email}) => {
	return (
		<div className="user" >
        <Jumbotron>
        <h1>{id}</h1>
        <h1>{name}</h1>
		    <h1>{email}</h1>
        </Jumbotron>
		</div>
		)
}

export default UserList