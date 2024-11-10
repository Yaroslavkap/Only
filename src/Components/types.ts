export interface Year {
    year: number,
    desc: string,
}

// interface YearsDesc {
//     yearLabel: string,
//     years: Year[]
// }

export interface DatesData {
    label: string,
    start: number,
    end: number,
    years: Year[]
}