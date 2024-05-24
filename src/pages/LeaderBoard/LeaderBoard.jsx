import { useLocalStorage } from '../../hooks';
import { sortRecords } from '../../utils';

import './LeaderBoard.css';

const LeaderBoard = () => {

    const { localStorageData } = useLocalStorage();
    const sortedData = sortRecords(localStorageData);

    return (
        <section className='leader-board-section' >
            <div className='leader-board-content'>
                {sortedData.length > 0 ? (
                    sortedData.map((user, index) => (
                        <div key={index}>
                            <p>{index + 1}. {user.username} - {user.score}</p>
                        </div>
                    ))
                ) : (
                    <p>No records found</p>
                )}
            </div>
        </section>
    );
};

export default LeaderBoard;
