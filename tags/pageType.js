function pageType() {
    dl = location.pathname
    hn = location.hostname
    pageTypes = [
        'home',
        'category',
        'product',
        'searchresults',
        'cart',
        'purchase',
        'account',
        'other'
    ]
    regexSearch = [
        '^\/$',
        '^\/collections.*',
        '^\/products.*',
        '^\/search.*',
        '^\/cart.*',
        '^\/thank_you.*',
        '^\/account.*',
        '.*'
    ]
    if (hn.match('^checkout\..*\..*') != null) {
        pageType = 'checkout'
    } else {
        for (i=0; i<pageTypes.length; i++) {
            pageType = pageTypes[i]
            test = dl.match(regexSearch[i])
            try {
                test = test[0] == null
                if (test === false) { break; }
            }
            catch(err) {
                { continue; }
            };
        }
        pageType = pageType.trim()
    }
    pageType = pageType.trim()
    return pageType;
}