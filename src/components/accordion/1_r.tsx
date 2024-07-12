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
            <h3>#1. React</h3>
            <ul className={cx('container')}>
                {data.map(d => (
                    <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion1;