export default (state=[], action)=>{
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}
// its better to use switch statement for reducers 
// in order to check all the actions
// export default (state=[], action)=>{
//     if (action==='FETCH_POSTS'){
//         return action.payload;
//     }
//     return state;
// }