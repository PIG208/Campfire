import { Button } from 'antd';
import { Campfire, Service } from 'campfire-api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    const history = useHistory();
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
        <div className='landing'>
            <div className="landing-header">
                <h1 className="brand">Campfire 篝火计划</h1>
                <Link to="/campfire" className="start">
                    Start Your Own Fire 自己生火
                </Link>
                <h3 className="trending">Trending Emo 排行</h3>
            </div>

            <Button
                className='btn-random'
                onClick={() => {
                    history.push('/topic');
                }}
            >
                Random 随机Emo
            </Button>

            <div className="mo-fire">
                <Fire />
                <div className="topics">
                    {topics.map((val, index) => (
                        <Link
                            key={index}
                            to={`/topic/${val.id}`}
                            className={`floating-topic item-${index + 1}`}
                        >
                            {val.topic}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
