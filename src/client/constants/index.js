const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
];
const successFlag = ["true", "false"]
const baseUrl = "https://api.spaceXdata.com/v3/launches";
const pagelimit = 100;

export { years, baseUrl, pagelimit, successFlag };

const constants = { years, baseUrl };
export default constants;