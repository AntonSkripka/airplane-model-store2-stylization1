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

//! Для визначення кольору фону картки в залежності від значення "year" - ванільний CSS
export function getBgColorVanillaCSS(year) {
    let className = 'planesItem'
    if (!year || year != Number(year)) return className;

    if (year >= 1946) {
        className += " last"
    }

    if (year >= 2000) {
        className += ' current';
    }

    return className;
}

// export function getBgColorVanillaCSS(year) {
//     const classNames = ["planesItem"];
//     if (year > 1945) classNames.push("last");
//     if (year > 1999) classNames.push("current");
//     console.log("classNames:", classNames); //!
//     return classNames;
// };
