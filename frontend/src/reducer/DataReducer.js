const DataReducer=(state={jsonData:[],loading:true, error:false},action)=>{
    switch(action.type){
        case "START":
            return{...state,loading:true,error:false}
        case "SUCCESS":
            return{...state,jsonData:action.data,loading:false,error:false}
        case "FAIL":
            return{...state,loading:false,error:true}
        default:
            return state
    }
}

export default DataReducer;