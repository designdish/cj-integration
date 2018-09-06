var today = new Date();
var cjTracking = ['cjevent'];
var purchaseURL = 'newtvorder.aspx';

waitFor(window.initLinks).then(
    initLinks(cjTracking, purchaseURL, ['PID', 'cjevent'])
);