import { useState } from "react";
import { LOCAL_STORAGE_KEY } from '../constants';

export const useLocalStorage = () => {
    const [localStorageData, setLocalStoragedata] = useState(() => {
        let data = localStorage.getItem(LOCAL_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    });

    const storeUser = (userData) => {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY)

        const users = data ? JSON.parse(data) : [];
        const userIndex = users.findIndex(user => user.username === userData.username);

        if (userIndex !== -1) {
            if (userData.score > users[userIndex].score) {
                users[userIndex].score = userData.score;
            }
        } else if (userData.score > 0) {
            users.push(userData);
        }

        setLocalStoragedata(users);
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    };

    return {
        localStorageData,
        storeUser,
    };
}
