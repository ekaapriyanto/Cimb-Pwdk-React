const init_state = {
    id: 0,
    username: "",
    fullName: "",
    role: "",
    testing1: "",
    testing2: "",
    errMsg: "",
}

export default (state = init_state, action) => {
    if (action.type === "ON_CHANGE_USERNAME"){
        return {...state, username: action.payload};
    } else if (action.type === "ON_LOGIN_SUCCESS"){
        const {username, fullName, role, id} = action.payload;
        return{
            ...state,
            username,
            fullName,
            role,
            id,
        }
    } else if (action.type === "ON_LOGIN_FAIL"){
        return {...state, errMsg: action.payload};
    } else if(action.type== "ON_LOGOUT_SUCCESS"){
        const {username,fullName,role,id} = action.payload
        return{
            ...state,
            username,
            fullName,
            role,
            id
        }
    }
    // if (action.type == "ON_CLICK_LOGIN"){
    //     return {...state, username: action.payload};
    // };
    return {...state};
};