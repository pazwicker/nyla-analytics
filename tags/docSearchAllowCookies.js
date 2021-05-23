function getGDPRParam() {
    try {
      return { value: window.localStorage.getItem("gdpr"), error: null };
    } catch(e) {
      return { value: null, error: e };
    }
  }

function GDPRPreference() {
    var host = document.location.hostname
    if (host == 'supergoop.com') {
        console.log('delegating to cookiebot')
        return;
    }
    try {
        var gdpr = getGDPRParam().value
        if (gdpr == 'allow') {
            dataLayer.push({
                //event: 'allow.cookies',
                allowCookies: gdpr
            })
        }
        else if (gdpr == 'null') {
            dataLayer.push({
                //event: 'allow.cookies',
                allowCookies: gdpr
            })
        }
        else if (gdpr == 'deny') {
            dataLayer.push({
                //event: 'deny.cookies',
                allowCookies: gdpr
            })
        }
    } catch (err) { // fail "open"
        dataLayer.push({
            //event: 'allow.cookies',
            allowCookies: 'allow'
        })
    }
}