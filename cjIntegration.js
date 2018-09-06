var initializeCj = function() {
    var today = new Date();
    var cjTracking = ['cjevent'];
    var purchaseURL = 'newtvorder.aspx';
    var tempPID = getValue('PID');
    var tempCj = getValue('cjevent');
    var mutatedPID = tempCj + '-' + tempPID;

    setCookie('PID', mutatedPID);
    initLinks(cjTracking, purchaseURL, mutatedPID);
};

waitFor(window.initLinks).then(initializeCj);