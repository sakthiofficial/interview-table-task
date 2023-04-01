export function sort(col, order, data) {
    console.log(col, order, data);
    let arr = [...data];

    for (let i = 0; i < data.length; i++) {

        let small = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (order > 0) {
                if (arr[small][col] > arr[j][col]) {
                    small = j;
                }
            } else {

                if (arr[small][col] < arr[j][col]) {
                    console.log(arr[j]);

                    small = j;
                }
            }
        }
        let swap = arr[i];
        arr[i] = arr[small];
        arr[small] = swap;
    }


    console.log(arr);
    return arr;
}
