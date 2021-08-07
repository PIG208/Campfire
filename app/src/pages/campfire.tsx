import React from 'react';
import { useState } from 'react';
import '../css/campfire.css';
import Fire2 from '../components/fire-2';

export default function Topic() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(null);
    const [num, setNum] = useState(false);

    function getName(event: any) {
        setName(event.target.value);
    }

    return (
        <>
            <div>
                <div className="title">
                    <h1>发起你自己的篝火吧, 请为它取一个名字</h1>
                    <input className="newfire" type="text" onChange={getName} />
                </div>

                <button
                    className="create"
                    onClick={() => {
                        setCount((count) => 1);
                        setNum((num) => true);
                    }}
                >
                    确认建立属于你的篝火
                </button>

                <div>
                    {num ? (
                        <div>
                            <div className="msg">
                                <h1>篝火已经成功建立了， 有</h1>
                                <h1>{count}</h1>
                                <h1>人在emo </h1>
                                <h1>{name}</h1>
                            </div>
                            <Fire2 />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}
