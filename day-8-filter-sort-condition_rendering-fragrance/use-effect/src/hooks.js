

export function useCount(newState){

   function setCount(state){
        newState = state
    }

   function count(){
        return newState
    }

    return [count, setCount]
}