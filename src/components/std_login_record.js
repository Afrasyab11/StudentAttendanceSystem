import React from 'react'
import mydata from './std.json';
const Studentrecord = () => {
   
   let data = mydata;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <th>{item.email}</th>
                            <th> {item.password}</th>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Studentrecord;