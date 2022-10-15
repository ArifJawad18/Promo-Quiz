import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quizzes from './components/Quizzes/Quizzes';


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
          path: '/quizzes/:quizzesId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizzesId}`)
          },
          element: <Quizzes></Quizzes>
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
          element:<div> Sorry, We Couldn't Find This Page 404</div>
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
