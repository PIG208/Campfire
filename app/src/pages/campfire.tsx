import Fire2 from '../components/fire-2';
import React from 'react';
import { Form, Input, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { Campfire, Service } from 'campfire-api';
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
                                placeholder="你遇到的，以及他人可能遇到的困难"
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <button className="create" type="submit">
                            确认建立
                            <br />
                            属于你的篝火
                        </button>
                    </Form>
                </div>

                <a href="/home">
                    <button className="home">Home</button>
                </a>
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
