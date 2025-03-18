/*25[0-5] — для чисел від 250 до 255,
2[0-4][0-9] — для 200–249,
1[0-9][0-9] — для 100–199,
[1-9][0-9] — для 10–99,
[0-9] — для 0–9.*/


function isIPAddress(ip) {
    let re = /(^25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    return re.test(ip)
}


function findRGBA(text) {
    let re = /rgba\((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\s*,\s*(1|0|0\.\d+)\)/g;
    let match = text.match(re);

    if (match) {
        return match[0];
    }else return null;
}


function findHexColor(text) {
    
}


function findTags(text,tag) {
    
}


function findPosNum(text) {

}


function findDates(text) {
    
}


function findEmail(text) {
    
}