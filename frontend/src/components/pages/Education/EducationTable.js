import React from 'react'
import { Table, Button } from 'react-bootstrap';

const TableRow = ({ position, row, onEdit, onDelete }) => (
    <tr>
        <td >{row.school}</td>
        <td>{row.degree}</td>
        <td>{row.field}</td>
        <td >{row.start}</td>
        <td>{row.finish}</td>
        <td><Button value={row.id} onClick={() => onEdit(position)}>Edit</Button></td>
        <td><Button variant="danger" value={row._id} onClick={() => onDelete(row._id)}>Delete</Button></td>
    </tr>
)

function EducationTable({ education, onEdit, onDelete }) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Field</th>
                        <th>Start</th>
                        <th>Finish</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {education.map((row, index) => (
                        <TableRow position={index} key={row._id} row={row} onEdit={onEdit} onDelete={onDelete} />
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default EducationTable
