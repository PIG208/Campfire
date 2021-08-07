
import fire from '../components/fire.svg';
import '../css/landing.css';

export default function Home() {
    return (
        <>
            <iframe
                style={{ display: 'none;' }}
                width="560"
                height="315"
                src="https://www.youtuberepeater.com/watch?v=qsOUv9EzKsg#gsc.tab=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="header">
                <h1 className="name">Campfire 篝火计划</h1>
                <a href="" className="start">
                    <h2>Start Your Own Fire 自己生火</h2>
                </a>
                <h3 className="trending">Trending Emo 排行</h3>
            </div>

            <button className="button random">Random 随机Emo</button>
            <div className="topics">
                <a href="" className="加班">
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
                <img src={fire} alt="Burning campfire" />
            </div>
        </>
    );
}
