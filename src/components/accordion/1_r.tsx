import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useState} from "react";

const AccordionItem = ({id, title, description, current, toggle}: {
    id: string;
    title: string;
    description: string;
    current: boolean;
    toggle: () => void;
}) => {
    return (
        <li className={cx('item', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            {current ? <div className={cx('description')}>{description}</div> : null}
        </li>
    );
}

const Accordion1 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(prevState => prevState === id ? null : id);
    } // 클로저 활용

    return (
        <>
            <h3>#1. React<sub>현재 desc만 html로 그리기</sub></h3>
            <p>HTML이 렌더링 되지 않은 상태라서 검색이 안 되며, SEO 측면에서도 좋지 않음</p>
            <ul className={cx('container')}>
                {data.map(d => (
                    <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion1;
