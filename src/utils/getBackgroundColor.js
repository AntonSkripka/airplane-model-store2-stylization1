export function getBgColorBuiltInStyles(year) {
    if (!year || year != Number(year)) return 'grey';

    if (year < 1946) {
        return '#ffdb92';
    } else if (year < 2000) {
        return '#d2fdbd';
    } else {
        return '#d6f1ff';
    }
}