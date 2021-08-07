import Fire from '../components/fire';
import '../css/landing.css';

export default function Home() {
    return (
        <>
            <div className="header">
                <h1 className="name">Campfire 篝火计划</h1>
                <a href="" className="start">
                    <h2>Start Your Own Fire 自己生火</h2>
                </a>
                <h3 className="trending">Trending Emo 排行</h3>
            </div>

            <button className="button random">Random 随机Emo</button>
            <div className="topics">
                <a href="/pages/topic.tsx" className="加班">
                    996
                </a>

                <a href="" className="quarantined">
                    Quarantined
                </a>
                <a href="" className="stressed">
                    Stressed out of nowhere
                </a>
            </div>

            <div className="mo-fire">
                <Fire />
            </div>
        </>
    );
}
