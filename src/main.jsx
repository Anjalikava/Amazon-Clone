import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'
import App from './App.jsx'
import WiseList from './components/navbar/navbar-belt/slide-dar/slidebar-datafiles/yourlist/WiseList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <WiseList/>
   
  </StrictMode>,
);
