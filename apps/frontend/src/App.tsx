import SummaryState from './components/SummaryState.tsx'
import Summary from './components/Summary.tsx'


function App() {

  return (
    <>
      <div className='bg-black opacity-90 flex flex-col justify-center items-center gap-10'>
        <div className='border-white border-2 rounded-2xl items-center place-content-center flex h-13 w-100'>
          <h1 className='text-white'>TRAZABILIDAD</h1>
          </div>
      
      <Summary/>
      <SummaryState/>
      </div>
    </>
  )
}

export default App