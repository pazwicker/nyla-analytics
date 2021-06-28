function () {
    if (isNaN(customerOrdersCount = window._dataLayerHistory.model.get('customerOrdersCount'))) {
        var customerOrdersCount = window._dataLayerHistory.model.get('CustomerOrdersCount')
    } else {
        var customerOrdersCount = window._dataLayerHistory.model.get('customerOrdersCount');
    }
    if (customerOrdersCount == 'na') {
        var customerOrdersCount = 0
    };
    return customerOrdersCount;
}