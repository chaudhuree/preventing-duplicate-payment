const transferMoney = (req, res) => {
  const { sender, receiver, amount } = req.body;
  console.log(`Transferring $${amount} from ${sender} to ${receiver}`);
  res.status(200).json({ success: 'Transaction successful' });
};

module.exports = {
  transferMoney,
};