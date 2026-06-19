import SummaryState from './components/Card.tsx'
import Summary from './components/Summary.tsx'
import PieChart from './components/PieChart.tsx'


function App() {

  return (
    <>
      <div className='bg-black opacity-90 w-screen h-screen flex flex-col justify-center items-center'>
        <div className='bg-gray-500 rounded-2xl w-3xl h-1/10 items-center flex'>
          <h1 className='bg-blue-900 text-center border-t w-100'>TRAZABILIDAD</h1>
          </div>
      
      <Summary/>

      <SummaryState title={'hola'} value={0} children={'hola'}></SummaryState>
      </div>
    </>
  )
}

export default App