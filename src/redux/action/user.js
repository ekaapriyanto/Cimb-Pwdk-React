export const usernameInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USERNAME",
        payload: text,
    };
};
export const onClickLogin = (login) => {
    return{
        type: "ON_CLICK_LOGIN",
        payload: login,
    };
};