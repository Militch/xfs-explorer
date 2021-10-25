function nowtimeformat(last=0, current=(new Date())) {
    let now = parseInt(current.getTime() / 1000)
    let diff = now - last;
    let timestr = `${diff} secs ago`;
    if (diff >= 60 && diff < 60*60) {
        let mins = parseInt(diff / 60);
        timestr = `${mins} mins ago`;
    }else if(diff >= 60*60 && diff < 60*60*24) {
        let hr = parseInt(diff / (60 * 60));
        let mins = parseInt((diff / 60) % 60);
        timestr = `${hr} hr ${mins} min ago`;
    }else if (diff >= 60*60*24){
        timestr = current.toUTCString();
    }
    return timestr;
}

export {
    nowtimeformat
}