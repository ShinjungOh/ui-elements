import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useEffect, useRef, useState} from "react";

const AccordionItem = ({id, title, description, current, toggle}: {
    id: string;
    title: string;
    description: string;
    current: boolean;
    toggle: () => void;
}) => {
    const descRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (descRef.current) {
            descRef.current.addEventListener('beforematch', toggle);
        }
        return () => {
            if (descRef.current) {
                descRef.current.removeEventListener('beforematch', toggle);
            }
        }
    }, [toggle]);

    return (
        <li className={cx('item', 'item3', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            <div className={cx('description')}
                 ref={descRef}
                 HIDDEN={current ? undefined : 'until-found'}
            >{description}</div>
        </li>
    );
}

const Accordion6 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(prevState => prevState === id ? null : id);
    } // 클로저 활용

    return (
        <>
            <h3>#6. React<sub>ctrl + F 검색 기능 추가</sub></h3>
            <p>참고: <a href="https://hiddenest.dev/accessible-accordion">https://hiddenest.dev/accessible-accordion</a></p>
            <ul className={cx('container')}>
                {data.map(d => (
                    <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion6;


