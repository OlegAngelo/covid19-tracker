import * as React from 'react';

import { 
  FormControl, 
  Select, 
  MenuItem
} from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown" >
        <Select 
          variant="outlined"
          value="dropdown"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Option 4</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}

export default App;
