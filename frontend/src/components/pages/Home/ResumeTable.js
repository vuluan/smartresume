import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const TableRow = ({ row, onEdit, onDelete }) => (
    <tr>
        <td >{row.id}</td>
        <td >{row.title}</td>
        <td >{row.description}</td>
        <td >{row.date_created}</td>
        <NavLink exact to='/resume/render' className='btn btn-success '>Show</NavLink>
        <td><Button value={row.id} onClick={onEdit}>Edit</Button></td>
        <td><Button variant="danger" value={row.id} onClick={() => onDelete(row.id)}>Delete</Button></td>
    </tr>
)

function ResumeTable({ resume, onEdit, onDelete }) {
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

                    {resume.map(row => (
                        <TableRow key={row.id} row={row} onEdit={onEdit} onDelete={onDelete} />
                    ))}

                </tbody>
            </Table>
        </div >
    )
}

export default ResumeTable
