import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Main from './layout/Main';
import Statistics from './Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topic/:id',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '/statistics', element: <Statistics></Statistics>
        },
        {
          path: '/blogs', element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*', element: <div className='bg-lime-900 p-36 text-3xl font-bold text-lime-50'>
        <h2>OOps!</h2>
        <h2>Nothing Found!!</h2>
        <h2 className='text-4xl'>404</h2>
      </div> ,
    }
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
