import '../css/fire-2.css';
import FloatingTopic from './floating-topic';

export default function Fire2({topic}: {topic?: string}) {
    return (
        <div className="container">
            {topic &&
                <FloatingTopic topic={topic} className="fire-topic"/>
            }
            <div className="flame" id="flame-2"></div>
            <div className="flame" id="flame-1"></div>
            <div className="flame" id="flame-3"></div>
            <div className="small-element" id="small-element-1"></div>
            <div className="small-element" id="small-element-2"></div>
            <div className="fire-bottom">
                <div className="main-fire"></div>
            </div>
            <div className="wood" id="wood-1"></div>
            <div className="wood" id="wood-2"></div>
        </div>
    );
}
