export function genFilter(gender, data) {
    console.log(gender, data);
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].gender.toLowerCase() == gender) {
            arr.push(data[i]);
        }
    }
    console.log(arr);
    return arr;
}
