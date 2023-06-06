window.addEventListener("mousemove", function () {
    let video = document.getElementById('video-bg');
    video.play();
});


function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            const responseArray = JSON.parse(xmlHttp.responseText);
            callback(responseArray);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=6088fe30129a450da65421439b0a2cfd";


httpGetAsync(url, function (responseArray) {
    const ip_container = document.querySelector('#ip-container');
    const region_container = document.querySelector('#region-container');
    // const isp_container = document.querySelector('#isp-container');

    ip_container.textContent = responseArray.ip_address;
    region_container.textContent = responseArray.region;
    // isp_container.textContent = responseArray.connection.organization_name;

});

