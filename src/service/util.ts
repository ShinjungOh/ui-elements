export const measureLines = (elem: HTMLElement, value: string) => {
    if (!elem || !value) return 0;
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d')!
    const style = window.getComputedStyle(elem);
    canvasContext.font = `${style.getPropertyValue('font-size')} ${style.getPropertyValue('font-family')}`;
    const measuredLines = value.split('\n').reduce((r, c) => {
        return r + Math.max(Math.ceil(canvasContext.measureText(c).width  // 1줄로 나열했을 때의 길이 (px)
            / elem!.offsetWidth), 1) // 1줄의 길이를 textarea의 너비로 나누기
    }, 0);

    return measuredLines;
}
