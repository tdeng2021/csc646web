import React from 'react'
import Logout from './Logout'
import Login from './Login'
import Register from './Register'

export default function UserBar() {

    const username = ''

    if (username) {
	return <Logout username={username} />
    }

    else {
	return (
	    <>
		<Login />
		<Register />
		</>
	)
    }
}