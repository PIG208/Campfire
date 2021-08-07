import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import '../css/topic.css';
import '../css/campfire.css';

export default function Topic() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(null);
    const [num, setNum] = useState(false);

    function getName(event:any)
    {
        setName(event.target.value)
    }

    return (
        <>
            <div>
                <div className="title">
                    <h1>发起你自己的篝火吧, 请为它取一个名字</h1>
                    <input className="newfire" type = "text" onChange={getName} />
                </div>

                <button className="create" onClick={()=>{
                    setCount(count =>1);
                    setNum(num=>true);
                }}>
                    确认建立属于你的篝火
                </button>

                <div>
                    {
                    num
                    ? 
                    <div>
                        <div className="msg"> 
                        <h1>篝火已经成功建立了， 有</h1>
                        <h1>{count}</h1>
                        <h1>人在emo </h1>
                        <h1>{name}</h1>
                    </div>
                
                
                    <div className="container">
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
                    </div>
                    : null
                    }
                </div>
            </div>
        </>
    );
}
