import React from 'react'

export default function Introducing() {
    // const name = "Shaxzodbek";

    // const element = <h1>Hello {name}</h1>

    // function MyFunction() {
    //     return element
    // }

    const user = {
        FirstName: 'Shaxzodbek',
        LastName: 'Raximov'
    }

    function formatName(user) {
        return user.FirstName + " " + user.LastName
    }

    function getGreeting(user) {
        if (user) {
            return <h1>Hello! {formatName(user)}</h1>
        }
        return <h1>Hello! Stranger</h1>
    }


    return (
        <div>
            {/* {MyFunction()} */}
            hello {getGreeting(user)}
        </div>
    )
}
