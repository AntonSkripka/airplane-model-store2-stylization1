// export function getManufacturingYears(start, end) {
//     let startD = new Date(start).getFullYear();
//     let endD;
//     if (end === "now") {
//         endD = new Date().getFullYear();
//         return `${endD - startD}+`
//     }
//     endD = new Date(end).getFullYear();
//     return endD - startD;
// }

import { getYear, parseISO } from 'date-fns';

export function getManufacturingYears(start, end) {
    const startYear = getYear(typeof start === 'string' ? parseISO(start) : start);
    
    if (end === "now") {
        const currentYear = getYear(new Date());
        return `${currentYear - startYear}+`;
    }
    
    const endYear = getYear(typeof end === 'string' ? parseISO(end) : end);
    return endYear - startYear;
}