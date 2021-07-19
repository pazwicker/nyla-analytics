function getPage() {
    var hs = document.location.hostname
    var dlPage = google_tag_manager[{{Container ID}}].dataLayer.get('page')
    var path = document.location.pathname
    if (hs.includes('checkout')) {
        var page = path
    } else if (isNaN(dlPage)) {
        var page = path
    } else {
        var page = dlPage
    }
    return page
};