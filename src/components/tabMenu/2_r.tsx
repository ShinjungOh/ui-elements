import data from "@/components/tabMenu/data";
import cx from "@/components/tabMenu/cx";
import {useState} from "react";

const TabItem = ({id, title, current, toggle}: {
    id: string;
    title: string;
    current: boolean;
    toggle: () => void;
}) => {
    return (
        <li className={cx('tab', {current})} key={id} onClick={toggle}>
            {title}
        </li>
    );
}

const TabMenu2 = () => {
    const [currentId, setCurrentId] = useState<string>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(id);
    }

    return (
        <>
            <h3>#2. React<sub>다 그려놓고 hidden/show CSS로 처리</sub></h3>
            <p>스크린리더는 제목1, 2, 3, 4, 설명1, 2, 3, 4 순으로 읽게됨</p>
            <div className={cx('container', 'tabMenu2')}>
                <ul className={cx('tabList')}>
                    {data.map(d => (
                        <TabItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                    ))}
                </ul>
                {data.map(d => (
                    <div className={cx('description', {current: currentId === d.id})}>{d.description}</div>
                ))}
            </div>
        </>
    );
}

export default TabMenu2;
