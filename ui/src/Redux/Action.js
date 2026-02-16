import axios from 'axios'
const Action = ()=> async (dispatch)=>{
    try {
        const product = await axios.get("http://localhost:5000/api/get")
        const res = product.data
        console.log(res)
        dispatch({type:'sucess', payload : res})
    } catch (error) {
        dispatch({type:'fail', payload :error.message})
    }
}

export default Action