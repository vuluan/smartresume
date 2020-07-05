import React from 'react'
import { Table, Button } from 'react-bootstrap';

function EducationTable({education, onEdit, onDelete}) {
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

               
                <tr>
                    <td>Humber College</td>
                    <td>Post Graduate Diploma</td>
                    <td>IT</td>
                    <td>2019</td>
                    <td>2020</td>
                    <td><Button onClick = {onEdit}>Edit</Button></td>
                    <td><Button  onClick = {onDelete}>Delete</Button></td>
                </tr>
                <tr>
                    <td>Humber College</td>
                    <td>Post Graduate Diploma</td>
                    <td>IT</td>
                    <td>2019</td>
                    <td>2020</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
                <tr>
                    <td>Humber College</td>
                    <td>Post Graduate Diploma</td>
                    <td>IT</td>
                    <td>2019</td>
                    <td>2020</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
                <tr>
                    <td>Humber College</td>
                    <td>Post Graduate Diploma</td>
                    <td>IT</td>
                    <td>2019</td>
                    <td>2020</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
                <tr>
                    <td>Humber College</td>
                    <td>Post Graduate Diploma</td>
                    <td>IT</td>
                    <td>2019</td>
                    <td>2020</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
                <tr>
                    <td>Humber College</td>
                    <td>Post Graduate Diploma</td>
                    <td>IT</td>
                    <td>2019</td>
                    <td>2020</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
                </tbody>
            </Table>
            
        </div>
    )
}

export default EducationTable
