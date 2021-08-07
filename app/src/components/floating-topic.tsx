import { Button, ButtonProps } from "antd";
import '../css/floating-topic.css'

export default function FloatingTopic({topic, className, btnProps}:{topic: string, className?: string, btnProps?: ButtonProps}){
    return (
    <Button
        className={`floating-topic ${className}`}
        {...btnProps}
    >
        {topic}
    </Button>
    )
}