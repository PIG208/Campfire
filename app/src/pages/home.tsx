import { Campfire, Service } from 'campfire-api';
import { useState } from 'react';
import { useEffect } from 'react';
import Fire from '../components/fire';
import '../css/landing.css';

export default function Home() {
    const [topics, setTopics] = useState<Campfire[]>([]);

    useEffect(() => {
        // Fetch the top 3 topics
        Service.getCampfire(undefined, 3, true).then((result) => {
            setTopics(result.campfires ?? []);
        });
    }, []); // eslint-disable-line

    return (
        <>
<<<<<<< HEAD
=======
            <iframe
                title="repeater"
                style={{ display: 'none' }}
                width="560"
                height="315"
                src="https://www.youtuberepeater.com/watch?v=qsOUv9EzKsg#gsc.tab=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
>>>>>>> 6a93b465e964a50a1fe611252190e049eaae971f
            <div className="header">
                <h1 className="name">Campfire 篝火计划</h1>
                <a href="" className="start">
                    <h2>Start Your Own Fire 自己生火</h2>
                </a>
                <h3 className="trending">Trending Emo 排行</h3>
            </div>

            <button className="button random">Random 随机Emo</button>
            <div className="topics">
<<<<<<< HEAD
                <a href="/pages/topic.tsx" className="加班">
                    996
                </a>

                <a href="" className="quarantined">
                    Quarantined
                </a>
                <a href="" className="stressed">
                    Stressed out of nowhere
                </a>
=======
                {topics.map((val, index) => (
                    <a href="" className={`item-${index + 1}`}>
                        {val.topic}
                    </a>
                ))}
>>>>>>> 6a93b465e964a50a1fe611252190e049eaae971f
            </div>

            <div className="mo-fire">
                <Fire />
            </div>
        </>
    );
}
