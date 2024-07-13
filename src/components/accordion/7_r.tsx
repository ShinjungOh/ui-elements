import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useEffect, useRef, useState} from "react";

const AccordionItem = ({title, description, open}: {
    title: string;
    description: string;
    open: boolean;
}) => {
    const descRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const open = () => descRef.current?.open;

        if (descRef.current) {
            descRef.current.addEventListener('beforematch', open);
        }
        return () => {
            if (descRef.current) {
                descRef.current.removeEventListener('beforematch', open);
            }
        }
    }, [open]);

    return (
        <details name='test' className={cx('item7')} ref={descRef}>
            <summary>{title}</summary>
            <div className={cx('description')}>{description}</div>
        </details>
    );
}

const Accordion7 = () => {
    return (
        <>
            <h3>#7. React<sub>details, summary 태그 사용</sub></h3>
            <p>details 태그에 추가된 name 프로퍼티로 하나만 열리도록 처리</p>
            <ul className={cx('container')}>
                {data.map((d, i) => (
                    <AccordionItem {...d} key={d.id} open={i === 0}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion7;


