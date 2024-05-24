import './Message.css';

const Message = ({ message, variant }) => {
    return (
        <p className={`message ${variant}`}>
            {message}
        </p>
    );
};

export default Message;
