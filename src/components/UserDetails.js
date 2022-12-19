import React from 'react'

export default function UserDetails({ userData }) {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(userData).map((data, keyIndex) => {
                            return <tr>
                                <td>{data}</td>
                                <td>{userData[data]}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
