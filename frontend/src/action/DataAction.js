import axios from "axios";

export const getData =(data)=> async(dispatch)=>{
    dispatch({type:'START'})
    try{
        dispatch({type:'SUCCESS',data:data})
    }catch(err){
        console.log('Error while get data '+err)
        dispatch({type:'FAIL'})
    }
}