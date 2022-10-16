import Stripe from 'stripe';
// const stripe = new Stripe('sk_test_51LtaAiJHPw2KQrMvbTJKIR9pV79IvrI9s3C6H36KB7j1f44aT5ysUwBan23xz7uUi5fMOlIyQZhTNhLYZL8bl6ix00LtbnC6QJ', {
//   apiVersion: '2022-08-01',
// });
const stripe = new Stripe('sk_test_51LtaAiJHPw2KQrMvbTJKIR9pV79IvrI9s3C6H36KB7j1f44aT5ysUwBan23xz7uUi5fMOlIyQZhTNhLYZL8bl6ix00LtbnC6QJ');


const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
  })
  console.log(paymentIntent);
  res.json({
    clientSecret: paymentIntent.client_secret,
  });
}

export default stripeController;
