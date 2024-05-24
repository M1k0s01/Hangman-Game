import { useState, useContext, createContext } from "react";
import { useLocalStorage } from "../hooks";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const [userData, setUser] = useState({
        username: null,
        score: 0,
    });
    const [userEnter, setUserEnter] = useState(false);
    const { storeUser } = useLocalStorage();

    const handleChange = (event) => {



        setUser((prevData) => ({
            ...prevData,
            username: event.target.value
        }));
    };

    const handleUserEnter = () => {
        setUserEnter(true);
    };

    const incrementScore = () => {
        setUser((prevData) => {
            let newUserData = {
                ...prevData,
                score: prevData.score + 1
            }
            
            storeUser(newUserData);
            return newUserData;
        });
    };

    const resetScore = () => {
        setUser((prevData) => ({
            ...prevData,
            score: 0
        }));
    };

    return (
        <UserContext.Provider value={{ userData, handleChange, userEnter, handleUserEnter, incrementScore, resetScore }} >
            { children }
        </UserContext.Provider>
    )
};
