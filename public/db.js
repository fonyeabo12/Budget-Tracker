let db = event.target.result;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (e) => {
    
    db.createObjectStore("pending", {autoincrement: true});
};

request.onsuccess = function(e) {
    if (navigator.onLine) {
        checkDatabase();
    }
};

function checkDatabase() {
    
}


