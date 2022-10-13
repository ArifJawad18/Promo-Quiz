import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter ([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
        path:'/',
        loader: () => fetch('quiz.json'),
        element:<Home></Home>
        },
        {
          path: '/quiz',
          loader: async () => fetch('quizans.json'),
        element:<Quiz></Quiz>
      },
        {
          path: '/statistic',
          element:<Statistics>Statistic</Statistics>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '*',
          element:<div> Not Found Components 404</div>
        },

      ]
      
    }
  ])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
