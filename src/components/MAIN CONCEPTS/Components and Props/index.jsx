import React from 'react'
import Project from './Project'
// props elementlarni belgilash uchun ishlatiladi.
export default function ComponentsandProps(props) {
    // berilgan elementni name ostida belgilab olish.
    // const name = <b>{props.name}</b>
    // const lastName = <b>{ props.lastName }</b>
    return (
        <div>
            {/* Name: {name} <br /> LastName: {lastName} */}
            <Project />
        </div>
    )
}
