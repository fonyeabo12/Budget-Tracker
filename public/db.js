let db = event.target.result;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (e) => {
    
    db.createObjectStore("pending", {autoincrement: true});
};



