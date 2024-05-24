import './Input.css';

const Input = ({ placeholder, handleChange }) => {
    return (
        <input
            placeholder={placeholder}
            onChange={handleChange}
            type="text"
            className="hangman-input"
        />
    );
};

export default Input;
