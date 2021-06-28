function () {
    if (isNaN(customerTotalSpent = window._dataLayerHistory.model.get('customerTotalSpent'))) {
        var customerTotalSpent = window._dataLayerHistory.model.get('CustomerTotalSpent')
    } else {
        var customerTotalSpent = window._dataLayerHistory.model.get('customerTotalSpent');
    }
    if (customerTotalSpent == 'na') {
        var customerTotalSpent = 0
    };
    return customerTotalSpent;
}