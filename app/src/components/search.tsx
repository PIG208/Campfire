import { Button, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { Campfire, Service } from 'campfire-api';
import { useHistory } from 'react-router';

export default function Search() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [data, setData] = useState<Campfire[]>([]);

    const handleSearch = (data: { query: string }) => {
        Service.getCampfire(name, 5).then((result) => {
            setData(result.campfires ?? []);
        });
    };

    const handleChange = (value: string) => {
        setName(value);
    };

    return (
        <Form onFinish={handleSearch} layout="vertical">
            <Form.Item
                label="在这里搜索你想找到的篝火 Looking for a campfire? Search here"
                name="query"
                style={{
                    fontFamily: 'Impact, fantasy',
                }}
            >
                <Input
                    className="search-input"
                    value={name}
                    onChange={(e) => handleChange(e.target.value)}
                ></Input>

                {data.map((value, index) => (
                    <Button
                        className="btn-common"
                        style={{ position: 'relative', margin: '0.5rem 0' }}
                        key={value.id}
                        onClick={() => history.push(`/topic/${value.id}`)}
                        block
                    >
                        {value.topic}
                    </Button>
                ))}
            </Form.Item>
        </Form>
    );
}
