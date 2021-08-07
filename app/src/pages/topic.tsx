import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import '../css/topic.css';

export default function Topic() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleSubmit = (data: any) => {
        setVisible(false);
        console.log(data);
    }

    /*
    Service.postCampfireParticipate(1).then(result=>{

    });*/

    return (
        <>
            <div className="title">
                <h1>今天有</h1>
                <h1>{count}</h1>
                <h1>人和你一样在emo同一件事</h1>
            </div>
            <button
                className="add"
                onClick={() => {
                    setCount((count) => count + 1);
                    setVisible(true);
                }}
            >
                加柴
            </button>
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
                title='说点什么'
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <Form
                    layout='vertical'
                >
                    <Form.Item
                        name='content'
                        rules={[
                            {
                                required: true,
                                message: "请填写内容"
                            }
                        ]}
                    >
                        <Input.TextArea rows={8} />
                    </Form.Item>
                    <Button htmlType="submit">
                        留言
                    </Button>
                </Form>
            </Modal>
        </>
    );
}
