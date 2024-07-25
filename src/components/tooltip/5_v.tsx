import VanillaWrapper from "@/components/vanillaWrapper";
import cx from "@/components/tooltip/cx";
import data from "@/components/tooltip/data";

const initiator = (wrapper: HTMLDivElement) => {
    const $tooltips = data.map(({id, title, description}) => {
        const $details = document.createElement('details');
        $details.classList.add(cx('details'));
        $details.setAttribute('data-tooltip', id);

        const $summary = document.createElement('summary');
        $summary.classList.add(cx('summary'));
        $summary.setAttribute('data-tooltip-summary', 'true');
        $summary.textContent = title;

        const $tooltip = document.createElement('div');
        $tooltip.classList.add(cx('tooltip'));
        $tooltip.textContent = description;

        $details.append($summary, $tooltip);
        return $details;
    });

    const closeAllTooltip = (e: Event) => {
        const target = e.target as HTMLElement;
        document.querySelectorAll('[data-tooltip]').forEach(el => {
            if (el !== target.parentElement) {
                el.removeAttribute('open');
            }
        });
    }
    window.addEventListener('click', closeAllTooltip);

    wrapper.append(...$tooltips);
}

const Tooltip5V = () => <VanillaWrapper title="#5" initiator={initiator}/>

export default Tooltip5V;
