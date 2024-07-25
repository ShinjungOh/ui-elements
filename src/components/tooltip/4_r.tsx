import data from "@/components/tooltip/data";
import cx from "@/components/tooltip/cx";
import ViewportContextProvider, {useViewportRect} from "@/components/tooltip/viewportContext";
import {useLayoutEffect, useRef, useState} from "react";

type Style = Partial<Record<'left' | 'right' | 'top' | 'bottom', number>>;

const Tooltip = ({id, title, description}: {
    id: string;
    title: string;
    description: string;
}) => {
    const viewportRect = useViewportRect();
    const wrapperRef = useRef<HTMLDetailsElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<Style>({});

    useLayoutEffect(() => {
        if (!wrapperRef.current || !targetRef.current) return;
        const wrapperRect = wrapperRef.current?.getBoundingClientRect();
        const targetRect = targetRef.current?.getBoundingClientRect();
        const verticalKey = wrapperRect.bottom + targetRect.height
        < viewportRect.height ? 'top' : 'bottom';
        const horizontalKey = wrapperRect.right + targetRect.width
        < viewportRect.width ? 'left' : 'right';
        setStyle({
            [verticalKey]: 0,
            [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
            [horizontalKey]: 0,
            [horizontalKey === 'left' ? 'right' : 'left']: 'auto',
        });
    }, [viewportRect]);

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
                {data.map(d => (
                    <Tooltip {...d} key={d.id}/>
                ))}
            </>
        </ViewportContextProvider>
    );
}

export default Tooltip4;
