window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();

        // Date
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();        
        console.log();
        const monthlist = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ];

        const date = monthlist[month] + " " + day + ", " + year;
        
        // Time
        const hours = today.getHours();
        const minutes = today.getMinutes();
        
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        
        const hourTime = hour > 12 ? hour - 12 : hour;
        const meridian = hour < 12 ? "am" : "pm";

        const time = hourTime + ":" + minute;

        document.getElementById("time").innerHTML = time;
        document.getElementById("meridian").innerHTML = meridian;
        document.getElementById("date").innerHTML = date;
        setTimeout(clock,1000);
    }
});