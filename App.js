import AuthStack from "./components/AuthStack";
import AuthContextProvider, {AuthContext} from "./store/auth-context";
import {useContext} from "react";
import AuthenticatedStack from "./components/AuthenticatedStack";
import ProfileContextProvider from "./store/profile-context";

function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
        <>
            {!authCtx.isAuthenticated && <AuthStack/>}
            {authCtx.isAuthenticated && <AuthenticatedStack/>}
        </>
    )
}

export default function App() {
    return (<AuthContextProvider><ProfileContextProvider><Navigation/></ProfileContextProvider></AuthContextProvider>);
}
