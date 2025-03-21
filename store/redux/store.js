import { configureStore } from '@reduxjs/toolkit'
import authenticateReducer, { authenticate } from './loggedIn'

export const store = configureStore({
    reducer: {
        authenticate: authenticateReducer
    }
})