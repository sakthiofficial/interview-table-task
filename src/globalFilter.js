export function globalFilter(char, data) {
    let arr = [];

    for (let i = 0; i < data.length; i++) {


        if (data[i].country.includes(char) || data[i].id.toString().includes(char) || data[i].amount.toString().includes(char) || data[i].first_name.toLowerCase().includes(char) || data[i].email.toLowerCase().includes(char) || data[i].first_name.toLowerCase().includes(char) || data[i].gender.toLowerCase().includes(char) || data[i].last_name.toLowerCase().includes(char)) {
            arr.push(data[i]);
        }


    }

    return arr;

}
