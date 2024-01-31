import './App.scss'
import { useGetCategoriesQuery, useGetProductsQuery } from './store/api'
import { NavigationComponent } from './components/NavigationComponent'
import { ErrorComponent } from './components/ErrorComponent'
import { LoadingComponent }  from './components/LoadingComponent'
import { MainContentComponent } from './components/MainContentComponent'
import { Route, Routes } from 'react-router-dom'
import { CartComponent } from './components/CartComponent'
import { FavoriteComponent } from './components/FavoriteComponent'

function App() {
  const { data, isLoading, error } = useGetCategoriesQuery()
  return (
    <div className='App'>
      <NavigationComponent></NavigationComponent>

      {isLoading ? (<LoadingComponent></LoadingComponent>) : error ? (<ErrorComponent></ErrorComponent>) : 
        (<Routes>
        <Route path='/cart' element={<CartComponent></CartComponent>}></Route>
          <Route path='/favorite' element={<FavoriteComponent></FavoriteComponent>}></Route>
  
          <Route path='/' element={<MainContentComponent them='popular'></MainContentComponent>}
          ></Route>
          
          {data.map((category) => {
                  return (
                    <Route 
                    key={category}
                    path={`/${category}`} 
                    element={<MainContentComponent them={category}></MainContentComponent>}></Route>
                  )
              })}
        </Routes>
      )}
    </div>
  )
}

export default App
