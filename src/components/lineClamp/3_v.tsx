import VanillaWrapper from "@/components/vanillaWrapper";
import cx from "@/components/lineClamp/cx";
import data from "@/components/lineClamp/data";

const clampedElemBuilder = (text: string, lines: number, wrapper: HTMLDivElement
) => {
    let isClamped = true;

    const toggleClamped = (e: Event | null, force?: boolean) => {
        isClamped = typeof force === 'boolean' ? force : !isClamped;
        $content.classList.toggle(cx('clamped'), isClamped);
        if (isClamped) $content.append($btn);
        else $btn.remove();
    }

    const $clone = document.createElement('div');
    $clone.classList.add(cx('text-clone'));
    $clone.textContent = text;

    const $text = document.createElement('div');
    $text.classList.add(cx('text'));
    $text.textContent = text;
    $text.style.webkitLineClamp = lines + '';

    const $btn = document.createElement('button');
    $btn.classList.add(cx('buttonMore'));
    $btn.addEventListener('click', toggleClamped, {
        once: true,
    });

    const $content = document.createElement('div');
    $content.classList.add(cx('content'));
    $content.append($clone, $text);

    const handleMutate = () => { // ussEffect를 1번만 사용하는 것과 같은 효과
        const lineHeight = parseInt(getComputedStyle($text).lineHeight);
        const measuredLines = Math.floor($clone.offsetHeight / lineHeight);
        toggleClamped(null, measuredLines > lines);
    }

    const observer = new MutationObserver(() => {
        if (wrapper.contains($content)) {
            handleMutate();
            observer.disconnect();
        }
    });
    observer.observe(wrapper, {
        childList: true,
        subtree: true,
    });

    return $content;
}

const initiator = (wrapper: HTMLDivElement) => {
    const $elems = data.map((text, i) => clampedElemBuilder(text, 5 - i, wrapper));
    wrapper.append(...$elems);
}

const LineClamp3V = () => <VanillaWrapper title="#3" subTitle="MutationObserver 사용" initiator={initiator}/>

export default LineClamp3V;
