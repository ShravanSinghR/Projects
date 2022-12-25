setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    ampm = "AM";

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // if (htime > 12) {
    //     htime -= 12;
    //     ampm = "PM";
    // }

    // if (htime == 0) {
    //     htime = 12;
    //     ampm = "AM";
    // }

    // h = htime < 10 ? "0" + htime : htime;
    // m = mtime < 10 ? "10" + mtime : mtime;
    // s = stime < 10 ? "0" + stime : stime;

    // let currentTime = h + ":" + m + ":" + s + am_pm;
    // document.getElementsByClassName("digi").innerHTML = currentTime;


}, 1000);
setInterval();

 digital(()=> {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    ampm = "AM";


    if (htime > 12) {
        htime -= 12;
        ampm = "PM";
    }

    if (htime == 0) {
        htime = 12;
        ampm = "AM";
    }

    h = htime < 10 ? "0" + htime : htime;
    m = mtime < 10 ? "10" + mtime : mtime;
    s = stime < 10 ? "0" + stime : stime;

    let currentTime = h + ":" + m + ":" + s +" " + am_pm;
    document.getElementById("digi").innerHTML = currentTime;

},1000);


digital();