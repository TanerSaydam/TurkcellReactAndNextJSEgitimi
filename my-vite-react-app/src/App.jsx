import Layout from './Layout';
import Login from './Login';
import Todo from './Todo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
    return(
        <BrowserRouter>        
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path="/" element={<Todo />}></Route>
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
//nested component
export default App;
