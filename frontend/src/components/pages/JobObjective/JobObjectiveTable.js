import React from 'react'
import { Table, Button } from 'react-bootstrap';

const TableRow = ({row, onEdit,onDelete}) => (
    <tr>
    <td >{row.id}</td>
    <td >{row.objective}</td>
    <td><Button value={row.id} onClick = {onEdit}>Edit</Button></td>
    <td><Button variant="danger" value={row.id} onClick = {()=>onDelete(row.id)}>Delete</Button></td>
    </tr>
  )

function JobObjectiveTable({objective, onEdit, onDelete}) {
    return (
        <div>
            <Table>
                <thead>
                <tr>
                <th>Id</th>
                    <th>Objective</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {objective.map(row => (
                    <TableRow key={row.id} row={row} onEdit={onEdit} onDelete={onDelete} />
                 ))}

                </tbody>
            </Table>         
        </div>
    )
}

export default JobObjectiveTable
