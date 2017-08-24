document.addEventListener('DOMContentLoaded', () => {


    setInterval(setAndDisplayCurrentTime, 1000);

    function setAndDisplayCurrentTime() {
        let currentH = new Date().getHours().toString();
        let currentM = new Date().getMinutes().toString();
        let currentS = new Date().getSeconds().toString();

        if (currentH.length === 1) {
            currentH = '0' + currentH
        }

        if (currentM.length === 1) {
            currentM = '0' + currentM
        }

        if (currentS.length === 1) {
            currentS = '0' + currentS
        }

        let sepClass = '';

        if (currentS % 2 === 1) {
            sepClass = 'sep-span'
        }

        let sep = '<span class="' + sepClass + '">:</span>';
        document.querySelector('#time').innerHTML = currentH + sep + currentM + sep + currentS;
    }


});