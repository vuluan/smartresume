import React from 'react'
import { Table, Button } from 'react-bootstrap';

const TableRow = ({ position, row, onEdit, onDelete }) => (
    <tr>
        <td >{position + 1}</td>
        <td >{row.profile}</td>
        <td><Button value={row.id} onClick={() => onEdit(position)}>Edit</Button></td>
        <td><Button variant="danger" value={row._id} onClick={() => onDelete(row._id)}>Delete</Button></td>
    </tr>
)

function ProfileTable({ profile, onEdit, onDelete }) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Profile</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {profile.map((row, index) => (
                        <TableRow position={index} key={row._id} row={row} onEdit={onEdit} onDelete={onDelete} />
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default ProfileTable
