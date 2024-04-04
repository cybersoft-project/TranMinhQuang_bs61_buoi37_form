import { useEffect, useState } from 'react'
import Form from './components/Form'
import Search from './components/Search'
import Table from './components/Table'
import { useDispatch } from 'react-redux'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { layDanhSach } from './redux/slice/initReducer'

function App() {
  const dispatch = useDispatch(reducer=>reducer.initReducer);
  useEffect(()=>{
    dispatch(layDanhSach(getLocalStorage()))
  }, [])
  
  return (
    <div className="container pt-16">
      <Form />
      <Search />
      <Table />
    </div>
 )
}

export default App
