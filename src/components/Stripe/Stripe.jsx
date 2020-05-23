import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Stripe({price}) {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_c7fQQDXZvlVsRUOa2Z28A8ix000pSZQg6a';
console.log(price);

const ontoken = (token) => {
   console.log(token);
   alert('Payment Successful');

}

    return (
        <div>
            <StripeCheckout
            name="CRWN Clothing Ltd" 
            billingAddress
            shippingAddress
            description={`Your Total Price is $${price}`} 
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            ComponentClass="div"
            label="Pay Now" 
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={ontoken}
            stripeKey={publishableKey}
            />

        </div>
    )
}


export default Stripe;