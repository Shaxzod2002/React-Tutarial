import React from 'react'
import ComponentsandProps from '../../MAIN CONCEPTS/Components and Props'

export default function Lesson4() {
    const user = {
        name: 'Shaxzodbek',
        lastName: 'Raximov'
    }
    return (
        <div>
            {/* Components and Props papkasidagi name e'lon qilingan shu name ga user.name da berilgan ismni qo'shib qo'yadi.  */}
            <ComponentsandProps name={user.name} lastName={user.lastName} />
        </div>
    )
}
