var initializeCj = function() {
    var cjTracking = ['cjevent'];
    var purchaseURL = 'newtvorder.aspx';
    var tempPID = getValue('PID');
    var tempCj = getValue('cjevent');
    var mutatedPID = tempPID + '-cjevent-' + tempCj;

    setCookie('PID', mutatedPID);
    // initLinks(cjTracking, purchaseURL, mutatedPID);
    updateURLs(cjTracking, purchaseURL, ['PID', 'cjevent']);
};

waitFor(window.updateURLS).then(initializeCj);