import { createSlice } from '@reduxjs/toolkit';
const authenticated = createSlice({
    name: 'authenticated',
    initialState: {
        loggedIn: false,
        user: null
    },
    reducers: {
        authenticate: (state, action) => {
            state.loggedIn = action.payload.loggedIn;
        },
        logOut: (state, loggedIn) => {
            state.loggedIn = action.payload.loggedIn;
        }
    }
})
export const authenticate = authenticated.actions.authenticate;
export const logOut = authenticated.actions.logOut;
export default authenticated.reducer