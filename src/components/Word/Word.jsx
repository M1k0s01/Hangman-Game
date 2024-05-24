import './Word.css';

const Word = ({ word, guesses }) => {

    return (
        <ul className='word-letters' >
            {word.split('').map((letter, index) => (
                <li className='letter' key={index}>
                    {guesses.includes(letter) ? letter : '_'}
                </li>
            ))}
        </ul>
    );
};

export default Word;
