import './Alphabet.css';

const Alphabet = ({ handleAlhpabetletterClick, guesses, wrongGuesses, maxWrongGuesses }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className="alphabet-container">
            {alphabet.map((letter) => (
                <button
                    className='letter'
                    key={letter}
                    onClick={() => handleAlhpabetletterClick(letter)}
                    disabled={guesses.includes(letter) || wrongGuesses >= maxWrongGuesses}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Alphabet;
