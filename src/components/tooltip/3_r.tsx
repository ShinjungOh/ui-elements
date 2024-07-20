import data from "@/components/tooltip/data";
import cx from "@/components/tooltip/cx";
import {useEffect} from "react";

const Tooltip = ({id, title, description}: {
    id: string;
    title: string;
    description: string;
}) => {
    return (
        <details className={cx('details')} data-tooltip={id}>
            <summary className={cx('summary')} data-tooltip-summary>
                {title}
            </summary>
            <div className={cx('tooltip')} onClick={e => e.stopPropagation()}>{description}</div>
        </details>
    );
}

const Tooltip3 = () => {
    // 컴포넌트 자체에서 안에서 해결할 수 있는 방법이 있으면 그걸로 해결하는 게 좋음
    useEffect(() => {
        const closeAllTooltip = (e: Event) => {
            const target = e.target as HTMLElement;
            document.querySelectorAll('[data-tooltip]').forEach(el => {
                if (el !== target.parentElement) {
                    el.removeAttribute('open');
                }
            });
        }
        window.addEventListener('click', closeAllTooltip);
        return () => {
            window.removeEventListener('click', closeAllTooltip);
        }
    }, []);

    return (
        <>
            <h3>#3. React<sub>HTML details로 작성</sub></h3>
            <p>일반적으로 툴팁을 구현할 때는 Details를 이용하는 것이 좋음</p>
            {data.map(d => (
                <Tooltip {...d} key={d.id}/>
            ))}
        </>
    );
}

export default Tooltip3;
