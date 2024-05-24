import { useUser } from '../../context';
import { usePlay } from '../../hooks';
import { Input, Word, Alphabet, Message } from '../../components';

import './Game.css';

import hangmanStage0 from '../../assets/svg/hangman-stage-0.svg';
import hangmanStage1 from '../../assets/svg/hangman-stage-1.svg';
import hangmanStage2 from '../../assets/svg/hangman-stage-2.svg';
import hangmanStage3 from '../../assets/svg/hangman-stage-3.svg';
import hangmanStage4 from '../../assets/svg/hangman-stage-4.svg';
import hangmanStage5 from '../../assets/svg/hangman-stage-5.svg';
import hangmanStage6 from '../../assets/svg/hangman-stage-6.svg';

const Game = () => {

    const {
        word,
        loading,
        error,
        guesses,
        wrongGuesses,
        maxWrongGuesses,
        handleGuess,
        isGameLost,
        handlePlayAgain,
    } = usePlay();

    const { userData, handleChange, userEnter, handleUserEnter } = useUser();

    const getImageSrc = () => {
        switch (wrongGuesses) {
            case 0:
                return hangmanStage0
            case 1:
                return hangmanStage1
            case 2:
                return hangmanStage2
            case 3:
                return hangmanStage3
            case 4:
                return hangmanStage4
            case 5:
                return hangmanStage5
            case 6:
                return hangmanStage6
            default:
                return null;
        }
    }

    return (
        <section className='game-section' >
            {!userEnter ? (
                <>
                    <Input
                        placeholder={'USERNAME'}
                        handleChange={handleChange}
                    />
                    <button className='start-game' onClick={handleUserEnter} >
                        START
                    </button>
                </>
            ) : (
                <>
                    <h2 className='username' >{userData.username}: {userData.score}</h2>
                    {loading && <p className='response-message' >Loading...</p>}
                    {error && <p className='response-message' >Error: {error.message}</p>}
                    {word && (
                        <>
                            <img className='hangman-image' src={getImageSrc()} alt='Hangman' />
                            <Word word={word[0]} guesses={guesses} />
                            <div className="control-container">
                                <Alphabet
                                    handleAlhpabetletterClick={handleGuess}
                                    guesses={guesses}
                                    wrongGuesses={wrongGuesses}
                                    maxWrongGuesses={maxWrongGuesses}
                                />
                                <Message
                                    message={`Wrong guesses: ${wrongGuesses}/${maxWrongGuesses}`}
                                    variant={'info'}
                                />
                                {isGameLost() && (
                                    <>
                                        <Message
                                            message={`Game Over! The word was ${word[0]}.`}
                                            variant={'lose'}
                                        />
                                        <button className='play-again-button' onClick={handlePlayAgain} >
                                            RETRY
                                        </button>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </section>
    );
};

export default Game;
