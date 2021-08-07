import { Button } from 'antd';
import { Campfire, Service } from 'campfire-api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Fire from '../components/fire';
import FloatingTopic from '../components/floating-topic';
import SlidingBg from '../components/sliding-bg';
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
    const [trends, setTrends] = useState<Campfire[]>([]);

    
    console.log(trends);

    useEffect(() => {
        // Attempt to play the audio
        try {
            if (audio.paused) {
                audio.play();
            }
        } catch {}
        Service.getCampfireTrending(3).then(
            (result) => {
            if (result.campfires) {
                setTrends(result.campfires);
            }
        });

        // Fetch the top 3 topics
        Service.getCampfire(undefined, 3, true).then((result) => {
            setTopics(result.campfires ?? []);
        });
    }, []); // eslint-disable-line

    return (
        <div className="landing">
            <SlidingBg />
            <div className="landing-header">
                <h1 className="brand">Campfire 篝火计划</h1>
                <Link to="/campfire" className="start">
                    Start Your Own Fire <br /> 自己生火
                </Link>
                <div className="trending-container">
                    <h3 className="trending">Trending Emo 排行 </h3>
                    <div className="trendlist">{trends.map((trend, index)=>
                        <p>#{index + 1} {trend.topic} {trend.participants}</p>
                    )} </div>
                </div>
            </div>

            <Button
                className="btn-random"
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
                        <FloatingTopic
                            topic={val.topic}
                            className={`item-${index + 1}`}
                            btnProps={{
                                onClick: () => {
                                    history.push(`/topic/${val.id}`)
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
