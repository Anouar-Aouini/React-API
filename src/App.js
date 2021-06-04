import React , {useState, useEffect} from 'react'
import './App.css';
import UserList from './UserList'
import axios from 'axios'

function App() {
const [listOfUSer , setListOfUser] = useState([])
const fetchData = async () => {
  try {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users")
  setListOfUser(result.data)
  }
  catch(err) {
    setListOfUser(null)
  }
}
useEffect(() => {
      fetchData();
  }, [])
  console.log(listOfUSer)
    return (
    <div className="App">
      {listOfUSer? <> {listOfUSer.map((user,key)=><UserList key={user.id} name={user.name} email={user.email}/>)}
      </>:<div>OOOPS! There's nothing to be displayed</div>}
    </div>
  );
}
export default App;