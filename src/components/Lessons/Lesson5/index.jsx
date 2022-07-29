import React from 'react'
import StateandLifecycle from '../../MAIN CONCEPTS/State and Lifecycle'

export default function Lesson5() {
    return (
        <div>
            {/* new Date() hozirgi real vaqtni belgilaydi. */}
            <StateandLifecycle date={new Date()} />
        </div>
    )
}
