import logo from './logo.svg';
import './App.css';
import Dynamic_List from './Components/Dynamic_List';
import { ThemeProvider } from '@material-ui/core';
import {theme} from './Style/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Dynamic_List/>
      </ThemeProvider>
    </div>
  );
}

export default App;
