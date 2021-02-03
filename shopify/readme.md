# Shopify

## Checkout Steps

### Overview

Recent updates to Shopify's security protocols restricted GTM from firing on Checkout pages via the "Additional Google Analytics JavaScript" method. Adding the below code to the "Additional Google Analytics JavaScript" below GTM will enable checkout funnel tracking through Shopify.

### Functionality

Reads Shopify's `Shopify.Checkout.step` and sends data directly to GA via gtag scripts. Fills out "Checkout Behavior" report in GA.

### Limitations

1. Not dynamic with checkout step numbers (1-4 hard-coded).
2. Does not support additional payment methods (Shop Pay, PayPal, etc).

### Development opportunites

1. Calculate max checkout step based on shopify settings.
2. Send multiple steps at once when user clicks on additional payment method.
3. Gather additional metrics from checkout funnel to augment send to GA.
4. Send data to other tags based on user's checkout progression.