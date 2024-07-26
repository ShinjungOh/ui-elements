import cx from "@/components/textBox/cx";
import {SyntheticEvent, useState} from "react";

const measureLines = (elem: HTMLTextAreaElement, value: string) => {
    if (!elem || !value) return 0;
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d')!
    const style = window.getComputedStyle(elem);
    canvasContext.font = `${style.getPropertyValue('font-size')} ${style.getPropertyValue('font-family')}`;
    const measuredLines = value.split('\n').reduce((r, c) => {
        return r + Math.max(Math.ceil(canvasContext.measureText(c).width  // 1줄로 나열했을 때의 길이 (px)
            / elem!.offsetWidth), 1) // 1줄의 길이를 textarea의 너비로 나누기
    }, 0);

    return measuredLines;
}

const TextBox1 = () => {
    const [text, setText] = useState('');
    const [lines, setLines] = useState(3);

    const handleChange = (e: SyntheticEvent) => {
        const elem = e.target as HTMLTextAreaElement;
        const value = elem.value;
        const lines = Math.min(Math.max(measureLines(elem, value), 3), 15); // 최소 3줄, 최대 15줄
        console.log(lines);
        setText(value);
        setLines(lines);
    }

    return (
        <>
            <h3>#1. React<sub>canvas - controlled 버전</sub></h3>
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
