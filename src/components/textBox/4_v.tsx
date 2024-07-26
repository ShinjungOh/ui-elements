import cx from "@/components/textBox/cx";
import VanillaWrapper from "@/components/vanillaWrapper";
import {measureLines} from "@/service/util";

const initiator = (wrapper: HTMLDivElement) => {
    const $text = document.createElement('textarea');
    $text.classList.add(cx('text'));
    $text.rows = 3;

    const handleInput = () => {
        const value = $text.value;
        const lines = Math.min(Math.max(measureLines($text, value), 3), 15);
        $text.rows = lines;
    }
    $text.addEventListener('input', handleInput);

    const $container = document.createElement('div');
    $container.classList.add(cx('container'));
    $container.append($text);
    wrapper.append($container);
}

const TextBox4V = () => <VanillaWrapper initiator={initiator} title="#4"/>;
export default TextBox4V;
