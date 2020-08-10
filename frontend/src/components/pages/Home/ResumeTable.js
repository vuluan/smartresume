import React from 'react'
import { Table, Button } from 'react-bootstrap';

const TableRow = ({ position, row, onEdit, onDelete, onShow }) => (
    <tr>
        <td >{row._id}</td>
        <td >{row.title}</td>
        <td >{row.description}</td>
        <td >{row.date_created}</td>

        <td><Button value={row.id} onClick={() => onShow(row._id)}>Show</Button></td>
        <td><Button value={row.id} onClick={() => onEdit(row._id)}>Edit</Button></td>
        <td><Button variant="danger" value={row._id} onClick={() => onDelete(row._id)}>Delete</Button></td>
    </tr>
)

function ResumeTable({ resume, onEdit, onDelete, onShow }) {
    return (
        <div>
            <Table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {resume.map((row, index) => (
                        <TableRow position={index} key={row._id} row={row} onEdit={onEdit} onDelete={onDelete} onShow={onShow} />
                    ))}

                </tbody>
            </Table>
        </div >
    )
}

export default ResumeTable
