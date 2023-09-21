import React,{useState} from 'react'
import './App.css';
import {data} from './data';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function App() {

  const[search,setsearch]=useState('')
  console.log(search)

  return (
    
    <div className="App">
        <br/> <br/> <br/>
        <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder="search data.." />
        <Table>
      <Thead>
        <Tr>
          <Th>S.No.</Th>
          <Th>First_name</Th>
          <Th>Last_name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.filter((item)=>{
            return search.toLocaleLowerCase()===''?item:item.first_name.toLocaleLowerCase().includes(search)
          }).map((item,key)=>{
            return<Tr key={item.id}>
              <td>{key+1}</td>
             <Td>{item.first_name}</Td>
             <Td>{item.last_name}</Td>
             <Td>{item.email}</Td>
             <Td>{item.phone}</Td>
          </Tr>
          })
        }
      </Tbody>
    </Table>
    </div>
    
  );
}

export default App;
