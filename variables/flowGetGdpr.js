function getGdpr() {
    var selection = window.flow.checkout.getOrder().order.attributes.gdpr
    if (selection === 'allow') {
        var selectionTf = true;
        dataLayer.push({
            event: 'allow.cookies',
            allowCookies: true
        });
    } else {
        var selectionTf = false;
        dataLayer.push({
            event: 'deny.cookies',
            allowCookies: false
        });
    }
    dataLayer.push({
        event: 'gtmEvent',
        eventCategory: 'privacy',
        eventAction: 'cookiebot',
        eventLabel: 'flow checkout tracking '.concat(selection),
    });
};