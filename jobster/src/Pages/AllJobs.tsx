import { toast } from 'react-toastify';
import { SearchContainer } from '../components/form/SearchContainer';
import { ListOfJobs } from '../components/ListOfJobs';
import { redirect } from 'react-router-dom';

export const loader = (store) => {
    return async () => {
        console.log('aqui')
        const user = store.getState().counter.user
        console.log(user)
        if (!user) {
            toast.warn("Please login to access the page.");
            return redirect("/");
        }
        return null;
    };
};

const AllJobs = () => {
    return (
        <>
            <SearchContainer />
            <ListOfJobs />
        </>
    )
}

export default AllJobs
