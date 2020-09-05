let toTimeAgo = (dt, long = false) => {
    if (!(dt instanceof Date)) {
        dt = new Date(dt);
    }

    let diff = (Date.now() - dt.getTime()) / 10000;

    if (diff < 6) {
        return `${ long ? 'just ' : '' }now`;
    }

    if (diff < 360) {
        let t = Math.floor(diff / 6);
        return t + (long ? ` minute${ (t > 1) ? 's' : '' }` : 'm');
    }

    if (diff < 8640) {
        let t = Math.floor(diff / 360);
        return t + (long ? ` hour${ (t > 1) ? 's' : '' }` : 'h');
    }

    if (diff < 3153600) {
        let t = Math.floor(diff / 8640);
        return t + (long ? ` day${ (t > 1) ? 's' : '' }` : 'd');
    }

    let t = Math.floor(diff / 3153600);
    return t + (long ? ` year${ (t > 1) ? 's' : '' }` : 'y');
};

export default toTimeAgo;
