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
        <li className={cx('item', 'item2', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </li>
    );
}

const Accordion2 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(prevState => prevState === id ? null : id);
    } // 클로저 활용

    return (
        <>
            <h3>#2. React</h3>
            <p>CSS로 처리해서 화면에만 안 보일 뿐, HTML이 렌더링 되어 있는 상태. display none으로 처리해서 검색은 안 됨
            </p>
            <ul className={cx('container')}>
                {data.map(d => (
                    <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion2;
