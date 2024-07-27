import cx from "@/components/textBox/cx";
import {SyntheticEvent} from "react";
import {measureLines} from "@/service/util";


const TextBox5 = () => {
    const handleChange = (e: SyntheticEvent) => {
        const elem = e.target as HTMLTextAreaElement;
        const value = elem.value;
        const lines = Math.min(Math.max(measureLines(elem, value), 3), 15); // 최소 3줄, 최대 15줄
        elem.rows = lines;
    }

    return (
        <>
            <h3>#5<sub>canvas - uncontrolled 버전</sub></h3>
            <p>useEffect 삭제</p>
            <div className={cx('container')}>
                <textarea
                    className={cx('textarea')}
                    rows={3}
                    onInput={handleChange}
                />
            </div>
        </>
    );
}

export default TextBox5;
