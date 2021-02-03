// save this variable as `JS - pageType` in order to maintain compatibility with other custom tags.

function() {
    dl = location.pathname
    pageTypes = [
        'home',
        'category',
        'product',
        'searchresults',
        'cart',
        'checkout',
        'purchase',
        'account',
        'other'
    ]
    regexSearch = [
        '/$',
        '/collections.*',
        '/products.*',
        '/search.*',
        '/cart.*',
        '/checkouts.*',
        '/thank_you.*',
        '/account.*',
        '.*'
    ]
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
    return pageType;
}