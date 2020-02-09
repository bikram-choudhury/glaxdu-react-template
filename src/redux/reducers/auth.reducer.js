import { SET_TOKENS } from "../action.type.constants";

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

export const getAccessToken = (state) => state.accessToken;
export const getRefreshToken = (state) => state.refreshToken;
export const getTokenType = (state) => state.tokenType;