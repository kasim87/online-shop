import './App.scss'
import { useGetProductsQuery } from './store/api'
import { NavigationComponent } from './components/NavigationComponent'

function App() {
  const {data, error, isLoading} = useGetProductsQuery

  return (
    <>
      {/* <NavigationComponent></NavigationComponent> */}
      {/* {data.map((product) => {
          return <h1>{product.rating.rate}</h1>
      })} */}
    </>
  )
}

export default App
