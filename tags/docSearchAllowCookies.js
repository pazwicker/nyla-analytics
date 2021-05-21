function docSearchAllowCookies() {
    var host = document.location.hostname
    if (host == 'supergoop.com') {
        console.log('delegating to cookiebot')
        return;
    }
	try {
		gdpr = document.location.search.split('gdpr=')[1]
        dataLayer.push({
            event: 'allow.cookies',
            allowCookies: gdpr
        })
	}
	catch(err) {
		dataLayer.push({
            event: 'allow.cookies',
            allowCookies: gdpr
        })
	}
}