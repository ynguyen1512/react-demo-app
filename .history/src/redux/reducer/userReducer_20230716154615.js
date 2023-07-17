
import { INCREMENT, DECREMENT } from '../action/counterAction';
const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        image: '',
        role: ''
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_USER_LOGIN_SUCCESS':
            console.log("check",action);
            return {
                ...state, account: {
                    access_token: action.payload.DT.access_token,
                    refresh_token: action.payload.DT,
                    username: action.payload.DT,
                    image: action.payload.DT,
                    role: action.payload.DT
                },
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;