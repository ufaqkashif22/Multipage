import React,{useContext, useEffect, useReducer} from "react"
import reducer from "./reducer"


const AppContext = React.createContext();

const API="https://dummyjson.com/products?limit=6"
const initialState ={
    services:[]

}
const AppProvider =( {children} )=>{
    
    const [state,dispatch]=useReducer(reducer,initialState)
  

    //to get the api data//
const getServices = async(url)=>{
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data.products });
      
      return data; 
      
    } catch (error) {
        console.log(error)
    }
}

    //to call api//
    useEffect(()=>{
     getServices(API);
},[])

    return<AppContext.Provider value={{...state}}> {children} </AppContext.Provider>
   
}

////custom hook generate///

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider, useGlobalContext};