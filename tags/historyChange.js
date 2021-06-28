//<script>
function historyChange() {
    try {
        var init = google_tag_manager['GTM-5RNKCKC'].dataLayer.get('init');
        if (isNaN(google_tag_manager['GTM-5RNKCKC'].dataLayer.get('init'))) throw 'init not set yet'
        if (init == true) {
            dataLayer.push({
                event: 'init',
                init: false
            });
        }
    }
    catch(err) {
        if (err == 'init not set yet') {
            dataLayer.push({
                event: 'init',
                init: true
            });
        };
    };
};

historyChange();
//</script>