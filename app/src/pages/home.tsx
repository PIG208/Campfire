import { Campfire, Service } from 'campfire-api';
import { useState } from 'react';
import { useEffect } from 'react';
import Fire from '../components/fire';
import '../css/landing.css';

const audio = new Audio('/campfire.mp3');
audio.loop = true;
window.onclick = () => {
    if (audio.paused) {
        audio.play();
    }
};

export default function Home() {
    const [topics, setTopics] = useState<Campfire[]>([]);

    useEffect(() => {
        // Attempt to play the audio
        try {
            if (audio.paused) {
                audio.play();
            }
        } catch {}

        // Fetch the top 3 topics
        Service.getCampfire(undefined, 3, true).then((result) => {
            setTopics(result.campfires ?? []);
        });
    }, []); // eslint-disable-line

    return (
        <>
            <div className="header">
                <h1 className="name">Campfire 篝火计划</h1>
                <a href="#" className="start">
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
