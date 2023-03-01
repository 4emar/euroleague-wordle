import logo from '../logo.svg';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Layout from '../components/layout/Layout';
import background from '../helper/images/background-image.png';

function App() {
  return (
      <div style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover', minHeight: '100vh'
      }}>
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </div>
  );
}

export default App;
