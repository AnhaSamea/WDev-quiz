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
      path: '*', element: <div>This route is not found: 404</div>
    }
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
