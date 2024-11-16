import Wrapper from '../assets/wrappers/ListOfJobs'
import { Job } from './Job'


const jobs = [{
    id: 1,
    position: 'Dev',
    company: 'Micro',
    jobLocation: 'Lisbon',
    jobType: 'Internship',
    createdAt: new Date().toLocaleDateString(),
    status: 'Pending',
}, {
    id: 2,
    position: 'Accountant',
    company: 'InnoWave',
    jobLocation: 'Porto',
    jobType: 'Full-Time',
    createdAt: new Date().toLocaleDateString(),
    status: 'Interview'
},]

export const ListOfJobs = () => {

    return (
        <Wrapper>
            <h5>{jobs.length} Job{jobs.length > 1 ? 's' : ''} Found</h5>
            <div className='jobs'>
                {jobs.map((item) => {
                    return <Job {...item} key={item.id} />
                })}
            </div>
        </Wrapper>
    )
}
