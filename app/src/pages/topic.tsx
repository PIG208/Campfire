import React, { Component } from 'react';
import '../css/topic.css';

export default function Topic() {
    return (
        <>
            <div>
                <div className="title">
                    <h1>今天有</h1>
                    <h1>xxx</h1>
                    <h1>人和你一样在emo同一件事</h1>
                </div>

                <button className="add">加柴</button>
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
        </>
    );
}
