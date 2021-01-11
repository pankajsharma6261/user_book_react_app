const initState = {
    users : [],
    user : null,
}
const userReducer = (state = initState , action) => {
    switch(action.type){
        case 'ADD_USER':
            return { ...state,users : [action.payload,...state.users] }
        case 'GET_USER':
            let getUser = state.users.filter(user => user.id === action.payload.id)
            for(let user of getUser.values()){
                getUser = user
            }
            return {...state , user : getUser}
        case 'UPDATE_USER':
            return {
                ...state,users: state.users.map(user => (
                    user.id === action.payload.id ? action.payload : user
                ))
            }
        case 'DELETE_USER':
            return {
                ...state,
                users : state.users.filter(user => user.id !== action.payload.id)
            }
        default:
            return state
    }
}
export default userReducer