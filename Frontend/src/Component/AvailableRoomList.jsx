import React, { useEffect, useState } from 'react'

import getAllRooms from '../Service/property.service'
const AvailableRoomList = () => {
    const [rooms, setRooms] = useState([]);
    const onload = async () => {
        await getAllRooms().then((res) => {
            setRooms(res.data);
            console.log("Property List");
        }).catch((err) => {
            console.log(err);
        });
    };
    useEffect(() => {
        onload();
    }, [])

    return (
        <div style={{ marginTop: "20px" }}>
            <table style={{ width: '90%', borderCollapse: 'collapse', margin: 'auto' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Sr.no</th>
                        <th style={tableHeaderStyle}>State</th>
                        <th style={tableHeaderStyle}>Address</th>
                        <th style={tableHeaderStyle}>Rooms</th>
                        <th style={tableHeaderStyle}>Rent</th>
                        <th style={tableHeaderStyle}>Deposit</th>
                        <th style={tableHeaderStyle}>Status</th>
                        <th style={tableHeaderStyle}>Tenant Type</th>
                        <th style={tableHeaderStyle}>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, index) => {
                        return (
                            <tr key={index}>
                                <td style={tableCellStyle}>{index + 1}</td>
                                <td style={tableCellStyle}>{room["state"]}</td>
                                <td style={tableCellStyle}>{room["address"]}</td>
                                <td style={tableCellStyle}>{room["room"]}</td>
                                <td style={tableCellStyle}>{room["rent"]}</td>
                                <td style={tableCellStyle}>{room["deposit"]}</td>
                                <td style={tableCellStyle}>{room["status"] ? "Available" : "Not Available"}</td>
                                <td style={tableCellStyle}>{room["user"]}</td>
                                <td style={tableCellStyle}>
                                    <button className="btn btn-primary">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
const tableHeaderStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    background: '#f2f2f2',
    textAlign: 'left',
};

const tableCellStyle = {
    padding: '10px',
    border: '1px solid #ddd',
};

export default AvailableRoomList
