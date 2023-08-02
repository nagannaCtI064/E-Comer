import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './Home';
import Shop from './Shop';
import Women from './women';
import Men from './Men';
import Kids from './kids';
import Login from './Login';
import Register from './Register';
import Myprofile from './Myprofile';
import list from './Data';
import Cart from './Cart';

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    setCart([...cart, item]);
  };

  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {list.map((item) => (
                    <Home1
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                      size={cart.length}
                      setShow={setShow}
                    />
                  ))}
                </>
              }
            />
            <Route
              path="/Shop"
              element={
                <>
                  {list.map((item) => (
                    <Shop
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                      size={cart.length}
                      setShow={setShow}
                    />
                  ))}
                </>
              }
            />
            <Route
              path="/women"
              element={
                <>
                  {list.map((item) => (
                    <Women
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                      size={cart.length}
                      setShow={setShow}
                    />
                  ))}
                </>
              }
            />
            <Route
              path="/men"
              element={
                <>
                  {list.map((item) => (
                    <Men
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                      size={cart.length}
                      setShow={setShow}
                    />
                  ))}
                </>
              }
            />
            <Route
              path="/kids"
              element={
                <>
                  {list.map((item) => (
                    <Kids
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                      size={cart.length}
                      setShow={setShow}
                    />
                  ))}
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/myprofile" element={<Myprofile />} />
          </Routes>
        </Router>
      </store.Provider>
      {warning && <div>Item already exists!</div>}
    </div>
  );
};

export default App;
