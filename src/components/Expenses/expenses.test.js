import {getAvailableYears} from "./Expenses";

describe('Expenses', () => {
    it('Should not work with  null or undefined', () => {
        expect(() => getAvailableYears(null)).toThrow();
        expect(() => getAvailableYears(undefined)).toThrow();
    });

    it('Should be sorted', () => {
        const arr = [
            {date: new Date(2111, 1, 1)},
            {date: new Date(991, 1, 1)},
            {date: new Date(2022, 1, 1)},
            {date: new Date(2023, 1, 1)},
            {date: new Date(2041, 1, 1)},
            {date: new Date(2059, 1, 1)},
        ];
        expect(getAvailableYears(arr)).toEqual(["2111", "2059", "2041", "2023", "2022", "991"]);
    });

    it('Should not have duplicates', () => {
        const arr = [
            {date: new Date(2020, 1, 1)},
            {date: new Date(2020, 2, 1)},
            {date: new Date(2020, 3, 1)},
            {date: new Date(2020, 4, 1)},
            {date: new Date(2020, 5, 1)},
        ];
        expect(getAvailableYears(arr)).toEqual(["2020"]);
    });
});
