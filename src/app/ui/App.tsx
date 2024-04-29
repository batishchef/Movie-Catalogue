import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movie from '../../pages/Movie/ui/Movie';
import Catalogue from '../../pages/catalogue/ui/Catalogue';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalogue />
  },

  {
    path: '/:id',
    element: <Movie />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;