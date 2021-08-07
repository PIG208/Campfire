import React, { useCallback } from 'react';
import { Button, Form, Input, Modal, notification } from 'antd';
import { Campfire, Service } from 'campfire-api';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react';
import '../css/topic.css';
import Fire2 from '../components/fire-2';
import SlidingBg from '../components/sliding-bg';

export default function Topic() {
    const history = useHistory();
    const [campfire, setCampfire] = useState<Campfire | undefined>();
    const [visible, setVisible] = useState(false);
    const [msgVisible, setMsgVisible] = useState(false);
    const [comment, setComment] = useState('');
    const id = parseInt(useParams<{ id: string }>().id);
    const topic =
        campfire && campfire.topic.length > 0 ? campfire.topic : '[无名]';

    const update = useCallback(() => {
        const random = id === undefined || isNaN(id);
        Service.getCampfire(undefined, 1, random, random ? undefined : id).then(
            (result) => {
                if (result.campfires) {
                    setCampfire(result.campfires[0]);
                    history.push(`/topic/${result.campfires[0].id}`);
                }
            }
        );
    }, [id, history]);

    const handleSubmit = (data: any) => {
        setVisible(false);
        let target = id;
        if (isNaN(target) && campfire) target = campfire.id;
        Service.postCampfireComment({
            id: target,
            content: data.content,
        }).then((result) => {
            if (result.result === 'success') {
                notification.success({
                    message: '成功',
                    description: '等待陌生人收到你的留言',
                });
                update();
            }
        });
    };

    const handleAdd = () => {
        let target = id;
        if (isNaN(target) && campfire) target = campfire.id;
        Service.postCampfireParticipate(target).then((result) => {
            if (result.result === 'success') {
                notification.success({
                    message: '成功',
                    description: '加柴成功',
                });
                update();
                setTimeout(() => {
                    setVisible(true);
                }, 1500);
            }
        });
    };

    const handlePick = () => {
        let target = id;
        if (isNaN(target) && campfire) target = campfire.id;
        Service.getCampfireComment(target).then((result) => {
            if (result.comment) {
                setComment(result.comment.content);
                setTimeout(() => {
                    setMsgVisible(true);
                }, 500);
            } else {
                notification.error({
                    message: '错误',
                    description: '似乎还没有人在这里留下过痕迹...',
                });
            }
        });
    };

    useEffect(() => {
        update();
    }, [update]);

    return (
        <>
            <div className="title">
                <h1>今天有{campfire?.participants}人</h1>
                <h1>和你一样在 emo</h1>
            </div>
            <SlidingBg />
            <button className="add" onClick={handleAdd} style={{ top: '60vh' }}>
                加柴 Join in
            </button>
            <button
                className="add"
                onClick={handlePick}
                style={{ top: 'calc(60vh + 5rem)' }}
            >
                抽取 {topic} 下的留言
            </button>
            <a href="/home">
                <button className="home">Home</button>
            </a>

            <Fire2 topic={topic} />

            <Modal
                visible={visible}
                title="说点什么 Say something"
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <Form onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                        name="content"
                        rules={[
                            {
                                required: true,
                                message: '请填写内容 Enter your message here',
                            },
                        ]}
                    >
                        <Input.TextArea rows={8} />
                    </Form.Item>
                    <Button htmlType="submit">留言 Submit</Button>
                </Form>
            </Modal>
            <Modal
                visible={msgVisible}
                title="陌生人的留言"
                onCancel={() => setMsgVisible(false)}
                footer={null}
            >
                {comment}
            </Modal>
        </>
    );
}
