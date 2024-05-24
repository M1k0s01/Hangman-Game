import { useState, useEffect } from "react";
import { wordApi } from "../../requests/word";

const useWord = () => {
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWord();
    }, []);

    const fetchWord = async () => {
        try {
            setLoading(true);
            const response = await wordApi.get();
            setWord(response.data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { word, loading, error, fetchWord };
}

export default useWord;
