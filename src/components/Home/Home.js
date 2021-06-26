import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../../contextData/UserContext';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    console.log(users);

    return (
        <div>
            <Button variant="info" style={{ margin: "15px" }}>Create Info</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Department</th>
                        <th>Batch</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.department}</td>
                                <td>{user.batch}</td>
                                <td><Button variant="success" className="btn">Read</Button>
                                    <Button variant="warning" className="btn">Update</Button>
                                    <Button variant="danger" className="btn">Delete</Button></td>
                            </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );

};

export default Home;