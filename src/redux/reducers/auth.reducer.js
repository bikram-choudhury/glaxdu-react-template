import { SET_TOKENS, LOGOUT } from "../action.type.constants";

const initialState = {
    accessToken: '',
    refreshToken: '',
    tokenType: ''
}

export function AuthReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_TOKENS:
            return {
                ...state,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
                tokenType: payload.tokenType
            };
        default: return state;
    }
}

export const getAccessToken = (state) => state && state.accessToken || initialState.accessToken;
export const getRefreshToken = (state) => state && state.refreshToken || initialState.refreshToken;
export const getTokenType = (state) => state && state.tokenType || initialState.tokenType;