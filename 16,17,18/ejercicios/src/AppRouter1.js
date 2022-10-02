import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import Tasklist from './pages/tareas/listadotareasPage';

function AppRouter1() {

  let loggedIn = true;
  return (
    <Router>
        <div>
            <aside>
                <Link to='/'>| HOME |</Link>
                <Link to='/about'>| ABOUT |</Link>
                <Link to='/faqs'>| FAQs |</Link>
                <Link to='/tareas'>| Tareas |</Link>
                <Link to='/404'>| Ruta no existe |</Link>
            </aside>

            <main>
                  <Routes>
                      
                        <Route  path="/" element={<HomePage/>}/>
                        <Route  path='/about' element={<AboutPage/>}/>
                        <Route  path='/faqs' element={<AboutPage/>}/>
                        
                            <Route   exact path='/tareas' element={<Tasklist/>}/>
                        
                        
                        <Route path="*" element={ <NotFoundPage/> }/>
                       
                  </Routes>
            </main>
        </div>
        
    </Router>
  );
}

export default AppRouter1;
