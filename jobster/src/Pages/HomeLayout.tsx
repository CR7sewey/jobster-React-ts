import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading';

export const HomeLayout = () => {
    const loading = useNavigation()
    const isLoading = loading.state === 'loading';

    return (
        <>
            <section>
                {isLoading ? <Loading center={"center"} />
                    : <div className='container'><Outlet /></div>
                }
            </section>
        </>
    )
}
