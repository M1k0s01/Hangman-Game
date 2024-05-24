import { axiosInstance } from "../config";

export const wordApi = {
    async get() {
        const result = await axiosInstance.get('/word');
        return result;
    },
};
