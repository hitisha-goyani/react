import { useDispatch, useSelector } from 'react-redux'
import { incCount } from '../redux/action'



function Count(){

    const count = useSelector((state)=>state.counter)
    console.log(count)

    const dispatch = useDispatch()

    return (
        <>
        <button onClick={()=>dispatch(incCount())}>+</button>
        <h1>{count.count}</h1>
        </>
    )
}

export default Count