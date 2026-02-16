import React, { useEffect } from 'react'

import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';

import Action from '../Redux/Action'

// import '../Component/hero.css'



const Home= () => {

  const {product} = useSelector(state=>state.item)

   const dispatch = useDispatch()

   console.log(product)



  useEffect(()=>{

    dispatch(Action())
    console.log(dispatch)

  },[dispatch])



  return (

    <div>

     

      

    </div>

  )

}



export default Home