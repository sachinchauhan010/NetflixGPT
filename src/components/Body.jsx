import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LogIn from './LogIn';
import Browse from './Browse';
import Header from './Header';
const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<LogIn/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ]);
    return(
        <div className='relative'>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;