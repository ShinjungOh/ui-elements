import cx from "@/components/textBox/cx";
import {SyntheticEvent, useState} from "react";
import {measureLines} from "@/service/util";

const TextBox1 = () => {
    const [text, setText] = useState('');
    const [lines, setLines] = useState(3);

    const handleChange = (e: SyntheticEvent) => {
        const elem = e.target as HTMLTextAreaElement;
        const value = elem.value;
        const lines = Math.min(Math.max(measureLines(elem, value), 3), 15); // 최소 3줄, 최대 15줄
        setText(value);
        setLines(lines);
    }

    return (
        <>
            <h3>#1. React<sub>canvas - controlled 버전</sub></h3>
            <p>컨트롤드 컴포넌트는 React가 상태를 관리하고 있는 컴포넌트. form 요소에 주로 사용</p>
            <div className={cx('container')}>
                <textarea
                    className={cx('textarea')}
                    rows={lines}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

export default TextBox1;
