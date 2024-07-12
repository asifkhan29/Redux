import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";


const GetUsers = () => {
    // Mock data, you can replace it with actual data from a server
    const users  = useSelector((state) => state.User)
    return (
        <div>
            <h2>Users List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users?.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default GetUsers;
