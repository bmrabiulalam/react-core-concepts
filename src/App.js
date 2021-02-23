import logo from './logo.svg';
import './App.css';
import  {useState, useEffect } from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Premier El', price: '$259.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(109);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {/* <button onClick={() => handleIncrease}>Increase</button> */}
    </div>
  )
}

function Users(props){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>{users.map(user => <li>{user.name} | {user.email} | {user.phone}</li>)}</ul>
    </div>
  )
}

function Products(props){
    const productStyle = {
      border: '2px solid yellow', 
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      margin: '10px', 
      padding: '0px 10px',
      height: '250px',
      width: '200px',
      float: 'left'
    };
    const {name, price} = props.product;
    return (
        <div style={productStyle}>
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button>Buy Now</button>
            {/* <h3>Hero of {props.nayika}</h3> */}
        </div>
    )
} 

export default App;
