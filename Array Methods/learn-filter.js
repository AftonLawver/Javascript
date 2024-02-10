// ages = [15, 43, 24, 19, 33, 11, 46, 57, 31, 18, 22, 14, 76, 9, 16, 88];

// const canVote = ages.filter((age => age >= 18));
// console.log(canVote);

// output: 
// [
//     43, 24, 19, 33, 46,
//     57, 31, 18, 22, 76,
//     88
// ]

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const lastedMoreThanTenYears = companies.filter(company => ((company.end - company.start) >= 10));

console.log(lastedMoreThanTenYears);