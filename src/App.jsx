import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';



function App() {
    //Add new job
    const AddJob = async (newJob) => {
        const response = await fetch('/api/jobs',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob)
        });
        return;
    };

    //Delete Job
    const deleteJob = async(id) => {
        const response = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path='/jobs' element={<JobsPage />} />
                    <Route path='/add-job' element={<AddJobPage handleAddJobSubmit={AddJob} />} />
                    <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;
