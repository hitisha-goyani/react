
import './App.css'
import Big from './component/big'
import Small from './component/small'

const Bigerwraper = Big(Small)

function App() {

  return (
    <>

  <Bigerwraper/>
     
    </>
  )
}

export default App






