export function amount(opt, amt, data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (opt == "less than") {
            if (data[i].amount < amt) {
                arr.push(data[i]);
            }
        } else if (opt == "greater than") {
            if (data[i].amount > amt) {
                arr.push(data[i]);
            }
        } else {

            if (data[i].amount == amt) {
                arr.push(data[i]);
            }

        }
    }
    return arr;
}
