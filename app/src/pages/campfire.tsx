import Fire2 from '../components/fire-2';
import HomeBtn from '../components/home-btn';
import React from 'react';
import { Campfire, Service } from 'campfire-api';
import { Form, Input, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../css/campfire.css';

export default function Topic() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [campfire, setCampfire] = useState<Campfire | undefined>(undefined);

    const handleSubmit = (data: { name: string }) => {
        Service.postCampfire({
            topic: data.name,
        })
            .then((result) => {
                if (result.campfire) {
                    setCampfire(result.campfire);
                } else {
                    return Promise.reject();
                }
            })
            .catch((error) => {
                notification.error({
                    message: '失败',
                    description: '未能创建篝火',
                });
                console.error(error);
            });
    };

    function handleChange(event: any) {
        setName(event.target.value);
    }

    return (
        <>
            <div>
                <div
                    className={`form-container ${
                        campfire ? 'form-container-success' : ''
                    }`}
                >
                    <Form onFinish={handleSubmit} layout="vertical">
                        <p>「篝火计划 Campfire」是一个树洞，让有着相似不幸的人们联结在一起，围着篝火抱团取暖。</p>
                        <Form.Item
                            label="发起你自己的篝火吧, 请为它取一个名字"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: '篝火名字不能为空',
                                },
                            ]}
                        >
                            <Input
                                className="newfire"
                                placeholder="你的，或他人的困难"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <button className="create" type="submit">
                            确认建立
                            <br />
                            属于你
                            <br />
                            和所有人的篝火
                        </button>
                    </Form>
                </div>

                <HomeBtn />
                {campfire && (
                    <button
                        className="create"
                        style={{
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: '25vh',
                            width: '50%',
                            maxWidth: 200,
                            position: 'absolute',
                        }}
                        onClick={() => {
                            history.push(`/topic/${campfire.id}`);
                        }}
                    >
                        {campfire.topic}
                    </button>
                )}
                <Fire2 topic={name} />
            </div>
        </>
    );
}
