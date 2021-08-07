import React, { useCallback } from 'react';
import { Button, Form, Input, Modal, notification } from 'antd';
import { Campfire, Service } from 'campfire-api';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import '../css/topic.css';

export default function Topic() {
    const [campfire, setCampfire] = useState<Campfire | undefined>();
    const [visible, setVisible] = useState(false);
    const id = parseInt(useParams<{ id: string }>().id);

    const update = useCallback(() => {
        const random = id === undefined || isNaN(id);
        Service.getCampfire(undefined, 1, random, random ? undefined : id).then(
            (result) => {
                if (result.campfires) {
                    setCampfire(result.campfires[0]);
                }
            }
        );
    }, [id]);

    const handleSubmit = (data: any) => {
        setVisible(false);
    };

    const handleAdd = () => {
        let target = id;
        if (isNaN(target) && campfire) target = campfire.id;
        Service.postCampfireParticipate(target).then((result) => {
            if (result.result === 'success') {
                setVisible(true);
                notification.success({
                    message: '成功',
                    description: '加柴成功',
                });
                update();
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
                <h1>和你一样在emo {campfire?.topic}</h1>
            </div>
            <button className="add" onClick={handleAdd}>
                加柴 Join in
            </button>
            <a href="/home">
                <button className="home">Home</button>
            </a>

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
        </>
    );
}
