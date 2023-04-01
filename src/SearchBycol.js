export function SearchBycol(key, char, data) {

    let arr = [];
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        if (key) {
            if (data[i][key].toString().toLowerCase().includes(char)) {
                arr.push(data[i]);
            }
        }

    }


    return arr;


}
