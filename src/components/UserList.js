import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function UserList() {
  const [arr, setarr] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
        // handle success
        console.log(response.data);
         setarr(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
      })
   
   
 }, [])
 

  
  return (
    <div>
 <h1> list of users</h1>
<Table striped="columns">
<thead>
   <tr>
    <th>name</th>
    <th>username</th>
    <th>email</th>
   </tr>
</thead>
<tbody>
   {arr.map(el=><tr>
    <td>{el.name}</td>
    <td>{el.username}</td>
    <td>{el.email}</td>
   </tr>)}
  </tbody>
</Table>
    </div>
  )
}

export default UserList