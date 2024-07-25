import data from "@/components/tooltip/data";
import cx from "@/components/tooltip/cx";
import ViewportContextProvider, {useViewportRect} from "@/context/viewportContext";
import {useRef} from "react";
import useStyleInView from "@/components/tooltip/useStyleInView";

const tooltipPosition = {
    top: '100%',
    bottom: 20,
    left: 0,
    right: 0,
} // {}를 useStyleInView에 그냥 넣게 되면 렌더링 이슈가 발생

const Tooltip = ({id, title, description}: {
    id: string;
    title: string;
    description: string;
}) => {
    const viewportRect = useViewportRect();
    const wrapperRef = useRef<HTMLDetailsElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const style = useStyleInView(wrapperRef, targetRef, tooltipPosition);

    return (
        <details className={cx('details')} data-tooltip={id} ref={wrapperRef}>
            <summary className={cx('summary')} data-tooltip-summary>
                {title}
            </summary>
            <div className={cx('tooltip')}
                 onClick={e => e.stopPropagation()}
                 ref={targetRef}
                 style={style}
            >
                {description}
            </div>
        </details>
    );
}

const Tooltip4 = () => {
    return (
        <ViewportContextProvider>
            <>
                <h3>#4. React<sub>툴팁이 화면 안에서만 보이도록 처리</sub></h3>
                <p>ViewportContext 사용</p>
                {data.map(d => (
                    <Tooltip {...d} key={d.id}/>
                ))}
            </>
        </ViewportContextProvider>
    );
}

export default Tooltip4;
