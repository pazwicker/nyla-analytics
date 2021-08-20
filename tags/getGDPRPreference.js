<script> 
function getGDPRParam() {
    try {
      return { value: window.localStorage.getItem("gdpr"), error: null };
    } catch(e) {
      return { value: null, error: e };
    }
  }

function GDPRPreference() {
    var host = document.location.hostname
    var regex = '^checkout.*$'
    if (host.match(regex) == null ) {
        console.log('delegating to cookiebot')
        return;
    }
    try {
        var gdpr = getGDPRParam().value
        if (gdpr == 'allow') {
            dataLayer.push({
                event: 'allow.cookies',
                allowCookies: true
            })
        }
        else if (gdpr == 'null') {
            dataLayer.push({
                event: 'allow.cookies',
                allowCookies: true
            })
        }
        else if (gdpr == 'deny') {
            dataLayer.push({
                event: 'deny.cookies',
                allowCookies: false
            })
        }
    } catch (err) { // fail "open"
        dataLayer.push({
            event: 'allow.cookies',
            allowCookies: true
        })
    }
};
  
GDPRPreference()
</script>

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

git remote set-url origin https://pazwicker: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@github.com/pazwicker/nyla-analytics.git