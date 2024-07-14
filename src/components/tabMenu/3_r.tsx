import data from "@/components/tabMenu/data";
import cx from "@/components/tabMenu/cx";
import {useState} from "react";

const TabItem = ({id, title, description, current, toggle}: {
    id: string;
    title: string;
    description: string;
    current: boolean;
    toggle: () => void;
}) => {
    return (
        <li className={cx('item', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </li>
    );
}

const TabMenu3 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(prevState => prevState === id ? null : id);
    } // 클로저 활용

    return (
        <>
            <h3>#3. React<sub>한 li 안에 title/desc 모두 있도록 처리</sub></h3>
            <p>단일 트리 형태의 html로 작성. 스크린리더는 제목1, 설명1, 제목2, 설명2 순으로 읽게됨</p>
            <ul className={cx('container', 'tabMenu3')}>
                {data.map(d => (
                    <TabItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))}
            </ul>
        </>
    );
}

export default TabMenu3;
