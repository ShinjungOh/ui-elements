import cx from "@/components/textBox/cx";
import {SyntheticEvent, useEffect, useRef, useState} from "react";
import {measureLines} from "@/service/util";


const TextBox2 = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const elem = textareaRef.current;
        const handleInput = () => {
            if (!elem) return;
            const value = elem.value;
            const lines = Math.min(Math.max(measureLines(elem, value), 3), 15); // 최소 3줄, 최대 15줄
            elem.rows = lines;
        }
        if (elem) elem.addEventListener('input', handleInput);

        return () => {
            if (elem) elem.removeEventListener('input', handleInput);
        }
    }, []);

    return (
        <>
            <h3>#2<sub>canvas - uncontrolled 버전</sub></h3>
            <p>리액트가 관여하지 않고, 나머지 다른 부분의 자율적인 영역은 개발자의 역량에 맞춰서 처리</p>
            <div className={cx('container')}>
                <textarea
                    className={cx('textarea')}
                    rows={3}
                    ref={textareaRef}
                />
            </div>
        </>
    );
}

export default TextBox2;
