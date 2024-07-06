import {BrowserRouter,Route,Routes} from'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blog';
import Contact from './contact';
import NoPage from './NoPage';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blog"element={<Blogs/>}/>
      <Route path="contact"element={<Contact/>}/>
      <Route path="*"element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
