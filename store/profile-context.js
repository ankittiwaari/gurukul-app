import {createContext, useState} from "react";

export const ProfileContext = createContext({
    profileData: {},
    setProfileData: () => {},
});

function ProfileContextProvider({children}) {
    const [profileData, setProfileData] = useState(null);
    function setProfileContextData(data) {
        setProfileData(data);
    }

    const value = {
        profileData: profileData,
        setProfileData: setProfileContextData
    }
    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export default ProfileContextProvider;