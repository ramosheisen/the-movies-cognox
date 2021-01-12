import {
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED
} from '../types';

export function createUserAction(user) {
    return async (dispatch) => {
        dispatch(registerUserPeding());

        try {
          dispatch(registerUserSuccess(user));
        } catch (err) {
          dispatch(registerUserFailed());
        }
    };
}

export const registerUserPeding = () => ({
	type: CREATE_USER_PENDING
});

export const registerUserSuccess = (user) => ({
    type: CREATE_USER_SUCCESS,
    payload: user,
});

export const registerUserFailed = () => ({
	type: CREATE_USER_FAILED
});