import Wrapper from '../assets/wrappers/Job'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Job = ({
    position,
    company,
    jobLocation,
    jobType,
    createdAt,
    status,
}: {
    position: string,
    company: string,
    jobLocation: string,
    jobType: string,
    createdAt: string,
    status: string,
}) => {
    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <div className='icons'>
                        <span className='icon'><FaLocationArrow /> </span>
                        <span className='text'>{jobLocation}</span>
                    </div>
                    <div className='icons'>
                        <span className='icon'><FaCalendarAlt /></span>
                        <span className='text'>{createdAt}</span>
                    </div>
                    <div className='icons'>
                        <span className='icon'><FaBriefcase /></span>
                        <span className='text'>{jobType}</span>
                    </div>

                    <div className={`status ${status.toLowerCase()}`}>{status}</div>
                </div>
                <footer>
                    <div className='actions'>
                        <button className='btn edit-btn'><Link to={'/add-job'}>Edit</Link></button>
                        <button className='btn delete-btn'><Link to={'/add-job'}>Delete</Link></button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}
