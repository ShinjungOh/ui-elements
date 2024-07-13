import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useState} from "react";

const AccordionItem = ({id, title, description, initialChecked}: {
    id: string;
    title: string;
    description: string;
    initialChecked: boolean;
}) => {
    return (
        <li className={cx('item', 'item5')} key={id}>
            <input type='radio' name="accordion" id={id} className={cx('input')} defaultChecked={initialChecked}/>
            <label htmlFor={id} className={cx('tab')}>{title}</label>
            <div className={cx('description')}>{description}</div>
        </li>
    );
}

const Accordion5 = () => {
    return (
        <>
            <h3>#5. React<sub>HTML radio input으로 처리</sub></h3>
            <p>상태 관리 필요 x. 검색에도 좋음(display none이 아닌 이상). 선택 전부 열려있게 하려면 details, summary 태그 사용</p>
            <ul className={cx('container')}>
                {data.map((d, i) => (
                    <AccordionItem {...d} key={d.id} initialChecked={i === 0}/>
                ))}
            </ul>
        </>
    );
}

export default Accordion5;
