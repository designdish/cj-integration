var initializeCj = function() {
    var cjTracking = ['cjevent'];
    var purchaseURL = 'newtvorder.aspx';
    var tempPID = getValue('PID');
    var tempCj = getValue('cjevent');
    var mutatedPID;
    if (tempPID.indexOf('-cjevent-') != -1) {
        if (isEqual(mutatedPID, tempPID) === false) {
            var oldPID = getSubParameter('PID', '', '-cjevent-');
            var oldCj = getSubParameter('PID', '-cjevent-', '');
            var newPID = getParameterByName('PID');
            var newCj = getParameterByName('cjevent');
            if (isEqual(newPID, oldPID) === false) {
                if (newPID != null) {
                    tempPID = newPID;
                } else {
                    tempPID = oldPID;
                }
            }
            if (isEqual(newCj, oldCj) === false) {
                if (newCj != null) {
                    tempCj = newCj;
                } else {
                    tempCj = oldCj;
                }
            }
        }
    }

    mutatedPID = tempPID + '-cjevent-' + tempCj;
    setCookie('PID', mutatedPID);

    // initLinks(cjTracking, purchaseURL, mutatedPID);
    updateURLs(cjTracking, purchaseURL, ['PID', 'cjevent']);
};

waitFor(window.updateURLS).then(initializeCj);