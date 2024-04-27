import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import  {calculateTotal}  from "../features/productSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function App() {
 const dispatch = useDispatch()


 useEffect(()=>{
  dispatch(calculateTotal())
 },[])
  return (
    <>
   <Navbar/>
   <ProductList/>
    </>
  )
}

export default App
