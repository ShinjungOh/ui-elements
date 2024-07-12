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
        <li className={cx('item', 'item3', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </li>
    );
}

const Accordion3 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(prevState => prevState === id ? null : id);
    } // 클로저 활용

    return (
        <>
            <h3>#3. React<sub>css transition 추가</sub></h3>
            <p>max-height로 구현한 트랜지션의 한계. 여닫을 때 매끄럽지 못함</p>
            <ul className={cx('container')}>
                {data.map(d => (
                    <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion3;
