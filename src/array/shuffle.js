let shuffle = (arr) => {
    let cur = arr.length;

    while (cur) {
        let rand = Math.floor(Math.random() * cur);
        cur--;

        let tmp = arr[cur];
        arr[cur] = arr[rand];
        arr[rand] = tmp;
    }

    return arr;
};

export default shuffle;
