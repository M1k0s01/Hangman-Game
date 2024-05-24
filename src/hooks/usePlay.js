import { useState, useEffect } from 'react';
import { useUser } from '../context/UserProvider';
import { useWord } from '../api'

export const usePlay = () => {
    const { word, loading, error, fetchWord } = useWord();
    const [guesses, setGuesses] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const maxWrongGuesses = 6;
    const { incrementScore, resetScore } = useUser();

    useEffect(() => {
        if (word) {
            setGuesses([]);
            setWrongGuesses(0);
        }
    }, [word]);

    useEffect(() => {
        if (word && isGameWon()) {
            incrementScore();
            fetchWord();
        }
    }, [guesses])

    const handleGuess = (letter) => {
        if (guesses.includes(letter)) return;

        setGuesses([...guesses, letter]);

        if (!word[0].includes(letter)) {
            setWrongGuesses(wrongGuesses + 1);
        }
    };

    const isGameWon = () => {
        return word[0].split('').every((letter) => guesses.includes(letter));
    };

    const isGameLost = () => {
        return wrongGuesses >= maxWrongGuesses;
    };

    const handlePlayAgain = () => {
        fetchWord();
        resetScore();
    }

    return {
        word,
        loading,
        error,
        guesses,
        wrongGuesses,
        maxWrongGuesses,
        handleGuess,
        isGameWon,
        isGameLost,
        handlePlayAgain,
    };
};
