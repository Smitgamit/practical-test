import React from 'react'

export default function UserDetails({ userData }) {
    // console.log('userData-->', userData);
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
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
