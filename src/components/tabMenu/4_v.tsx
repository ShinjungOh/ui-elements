import data from "@/components/tabMenu/data";
import cx from "@/components/tabMenu/cx";
import VanillaWrapper from "@/components/vanillaWrapper";

const buildTabMenus = ({id, title}: {
    id: string;
    title: string;
}) => {
    const $li = document.createElement('li');
    $li.classList.add(cx('tab'));
    $li.textContent = title;
    $li.setAttribute('data-id', id);
    return $li;
}

const buildDescriptions = ({id, description}: {
    id: string;
    description: string;
}) => {
    const $div = document.createElement('div');
    $div.classList.add(cx('description'));
    $div.textContent = description;
    return $div;
}

const initiator = (wrapper: HTMLDivElement) => {
    let currentId: string = data[0].id;

    const $container = document.createElement('div');
    $container.classList.add(cx('container'), cx('tabMenu2'));

    const $tabUl = document.createElement('ul');
    $tabUl.classList.add(cx('tabList'));

    const $tabList = data.map(buildTabMenus);
    const $desc = data.map(buildDescriptions);

    $tabUl.append(...$tabList);
    $container.append($tabUl, ...$desc)

    const handleClickTab = (e: Event) => {
        const $el = e.target as HTMLElement;
        if (!$el.classList.contains(cx('tab'))) return;

        const currentId = $el.dataset.id || data[0].id;

        $tabList.forEach(($item, i) => {
            $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
            $desc[i].classList.toggle(cx('current'), currentId === $item.dataset.id);
        });
    }

    $tabUl.addEventListener('click', handleClickTab);
    $tabList[0].click(); // 렌더링되기 전에 이벤트가 걸려있는 것을 확인 가능

    wrapper.append($container);
}

const TabMenu4V = () => <VanillaWrapper initiator={initiator} title="#4"/>;

export default TabMenu4V;
