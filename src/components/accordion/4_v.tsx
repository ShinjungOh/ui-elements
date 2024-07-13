import data from "@/components/accordion/data";
import cx from "@/components/accordion/cx";
import {useState} from "react";
import VanillaWrapper from "@/components/vanillaWrapper";

const itemBuilder = ({id, title, description}: {
    id: string;
    title: string;
    description: string;
}) => {
    const $li = document.createElement('li');
    $li.classList.add(cx('item'), cx('item3'));
    $li.setAttribute('data-id', id);

    const $tab = document.createElement('div');
    $tab.classList.add(cx('tab'));
    $tab.textContent = title;

    const $description = document.createElement('div');
    $description.classList.add(cx('description'));
    $description.textContent = description;

    $li.append($tab, $description);
    return $li;
}

const initiator = (wrapper: HTMLDivElement) => {
    let currentId: string | null = null;

    const $ul = document.createElement('ul');
    $ul.classList.add(cx('container'));

    // 이벤트 위임
    const handleClickTab = (e: Event) => {
        const $el = e.target as HTMLElement;
        if (!$el.classList.contains(cx('tab'))) return;

        const targetId = $el.parentElement!.dataset.id;
        if (!targetId) return;

        currentId = targetId === currentId ? null : targetId;

        $items.forEach($item => {
            $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
        })
    }
    $ul.addEventListener('click', handleClickTab);

    const $items = data.map(itemBuilder);
    $ul.append(...$items);

    wrapper.append($ul);
    ($items[0].children[0] as HTMLElement).click();
}

const Accordion4V = () => <VanillaWrapper title="#4" subTitle='순수 JavaScript로 작성, 이벤트 위임' initiator={initiator}/>
export default Accordion4V;
