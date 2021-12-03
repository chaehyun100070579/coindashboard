import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import './App.css';

function App() {
    const callApi = async () => {
        axios.get('/api').then((res) => console.log(res.data.test));
    }

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className="App">
            Hello World
        </div>
    );
}

export default App;
