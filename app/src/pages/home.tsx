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
            <audio autoPlay>
                <source src='../assets/campfire.mp3' type="audio/mpeg"></source>
            </audio>
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
            <div className="header">
                <h1 className="name">Campfire 篝火计划</h1>
                <a href="" className="start">
                    <h2>Start Your Own Fire 自己生火</h2>
                </a>
                <h3 className="trending">Trending Emo 排行</h3>
            </div>

            <button className="button random">Random 随机Emo</button>
            <div className="topics">
                {topics.map((val, index) => (
                    <a key={index} href="#" className={`item-${index + 1}`}>
                        {val.topic}
                    </a>
                ))}
            </div>

            <div className="mo-fire">
                <Fire />
            </div>
        </>
    );
}
