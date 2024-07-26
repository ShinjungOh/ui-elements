import cx from "@/components/textBox/cx";
import React, {useEffect, useRef} from 'react';

const TextBox3 = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const cloneRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const elem = textareaRef.current;
        const cloneElem = cloneRef.current;
        const handleInput = () => {
            if (!elem || !cloneElem) return;
            const value = elem.value;
            cloneElem.value = value;
            elem.rows = Math.min(Math.max(
                Math.ceil(cloneElem.scrollHeight / cloneElem.clientHeight)
                , 3), 15); // 최소 3줄, 최대 15줄
        }
        if (elem) elem.addEventListener('input', handleInput);

        return () => {
            if (elem) elem.removeEventListener('input', handleInput);
        }
    }, []);

    return (
        <>
            <h3>#3<sub>uncontrolled 버전, clone elem</sub></h3>
            <p></p>
            <div className={cx('container')}>
                <textarea
                    className={cx('clone')}
                    rows={1}
                    ref={cloneRef}
                    readOnly
                />
                <textarea
                    className={cx('textarea')}
                    rows={3}
                    ref={textareaRef}
                />
            </div>
        </>
    );
}

export default TextBox3;
