import './App.css'
import TopNav from '../components/nav'
import thaneq from '/src/assets/thaneqconceptscaled.jpg'
import Image from 'mui-image'
import Box from '@mui/material/Box';

function App() {
  return(
  <>
      <TopNav></TopNav>
        <img src={thaneq} class="center"></img>
  </>
  )
}

export default App
