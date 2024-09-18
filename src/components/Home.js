import { Banner } from './Banner';
import { Favorites } from './Favorites';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Favorites />
        </div>
    )
}

export default Home;