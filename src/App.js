import logo from './logo.svg';
import './App.css';
import MyList from './virtualization/MyList';
import MyLazyImage from './lazyloading/MyLazyImage';
import Post from './memoization/Post';
import { useState } from 'react';
import Test from './memoization/Test';
const data = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    img: './images/item-1.jpeg',

  },
  {
    id: 2,
    title: 'diner double',
    img: './images/item-2.jpeg',

  },
  {
    id: 3,
    title: 'godzilla milkshake',
    img: './images/item-3.jpeg',

  },
  {
    id: 4,
    title: 'country delight',
    img: './images/item-4.jpeg',
  },
  {
    id: 5,
    title: 'egg attack',
    img: './images/item-5.jpeg',

  },
  {
    id: 6,
    title: 'oreo dream',
    img: './images/item-6.jpeg',

  },
  {
    id: 7,
    title: 'bacon overflow',
    img: './images/item-7.jpeg',

  },
  {
    id: 8,
    title: 'american classic',

    img: './images/item-8.jpeg',

  },
  {
    id: 9,
    title: 'quarantine buddy',
    img: './images/item-9.jpeg',

  },
];


function App() {
  const [signIn, setSignIn] = useState(false);
  const details = { name: "haritha", title: "UI Developer" };
  return (
    <>
      <div className="App">
        <MyList />
        <br></br>
        {
          data.map((item, index) => {
            return (

              <MyLazyImage key={index} src={item.img} alt={item.title} />
            )
          })
        }
      </div>
      <div>
        <Post signIn={signIn} details={details} />
        <div>
          <button onClick={() => setSignIn(!signIn)}>Toggle SignIn</button>
        </div>
      </div>
      <div>
        <Test />
      </div>
    </>
  );
}

export default App;
