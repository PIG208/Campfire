import Fire from '../components/fire';
import Search from '../components/search';
import SlidingBg from '../components/sliding-bg';
import '../css/search.css';
import '../css/landing.css';
import HomeBtn from '../components/home-btn';

export default function LookupPage() {
    return (
        <>
            <HomeBtn />
            <div className="search-container">
                <Search />
            </div>
            <SlidingBg />
            <div className="mo-fire">
                <Fire />
            </div>
        </>
    );
}
