ga('require', 'ec');
switch(Shopify.Checkout.step) {
    case 'contact_information':
    ga('ec:setAction','checkout', {'step': 1});
    ga('send','event','EnhancedEcommerce','checkout steps','contact | step 1')
    break;
    case 'shipping_method':
    ga('ec:setAction','checkout', {'step': 2});
    ga('send','event','EnhancedEcommerce','checkout steps','shipping | step 2')
    break;
    case 'payment_method':
    ga('ec:setAction','checkout', {'step': 3});
    ga('send','event','EnhancedEcommerce','checkout steps','payment | step 3')
    break;
    case 'review':
    ga('ec:setAction','checkout', {'step': 4});
    ga('send','event','EnhancedEcommerce','checkout steps','review | step 4')
    break;
};