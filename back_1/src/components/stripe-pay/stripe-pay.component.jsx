import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripePay = ({price}) => {
    const priceForStripe= price * 100;
    const publishableKey="pk_test_51Guok3G0eNBDc6jgUZYKF0MyvXFGwefT5IE4EgYUsZ7LKPMorMVsFNeCOKGg7aKbWIeEpGc4PRoI00P890Xj4kbQ00RfEZGysN"

    const onToken= token => {
        console.log(token);
        alert("Płatność wykonana!")
    }

    return (
        <StripeCheckout
        label='Zapłać teraz'
        name='LOGO Store'
        image="https://i.imgur.com/D9ot7Xtl.png"
        billingAddress
        shippingAddress
        description={`Do zapłaty masz ${price} zł`}
        amount={priceForStripe}
        panelLabel="Zapłać teraz"
        token={onToken}
        currency="PLN"
        stripeKey={publishableKey}
        />
    )
}

export default StripePay