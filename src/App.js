import { Link } from 'react-router-dom';
import { UserProvider } from './context';
import './App.css';
import './fonts.css';

import { useRouter } from './hooks';

const App = () => {
	const routes = useRouter()

	return (
		<UserProvider>
			<main className='App'>
				<Link to={'/'} className='game-title' >Hangman</Link>

				<div className='pages' >
					{routes}
				</div>
			</main>
		</UserProvider>
	);
};

export default App;
