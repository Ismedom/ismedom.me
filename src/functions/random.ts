import { COLOR_TYPE, COLORS } from '../constants/color';
import { Color } from '../types/color.type';


export function randColorClass(colors: Color[] = COLORS as string[],
    type: string = COLOR_TYPE.COLOR): string {
    const color = colors[Math.floor(Math.random() * colors.length)];
    switch (type) {
        case COLOR_TYPE.COLOR:
            return `text-[${color}]`
        case COLOR_TYPE.BACKGROUND:
            return `bg-[${color}]`
        default:
            return color as string;
    }
}