/*25[0-5] — для чисел від 250 до 255,
2[0-4][0-9] — для 200–249,
1[0-9][0-9] — для 100–199,
[1-9][0-9] — для 10–99,
[0-9] — для 0–9.*/

let ip='192.168.0.1';
let text="rgba(255, 99, 71, 0.5)rgba(255, -10, 50, 0.5)bb1 #FFFFFF 1-2k #1234 <div>Content</div> -77677l 23/03/2025 32/12/2020 user@example.com userexample.com user@domain"
let tag="div";

function isIPAddress(ip) {
    let re = /(^25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    return re.test(ip);
}


function findRGBA(text) {
    let re = /rgba\(\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\s*,\s*(1|0|0\.\d+)\)/g;
    let match = text.match(re);

    return match||null;
}


function findHexColor(text) {
    let hex=/#[0-9A-Fa-f]{6}\b|#[0-9A-Fa-f]{3}\b/g;
    let match = text.match(hex);

    return match||null;
}


function findTags(text,tag) {
    let tags=new RegExp(`<${tag}[^>]*>`, 'gi');
    return text.match(tags)||null;
}


function findPosNum(text) {
    let posNum=/\b(?!0\b)\d+(\.\d+)?\b/g;
    return text.match(posNum)||null;
}


function findDates(text) {
    let date=/\b(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[0-2])[\/-]\d{4}\b/g;
    return text.match(date)||null;
}


function findEmail(text) {
    let email=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,}\b/g;
    return text.match(email)||null;
}
