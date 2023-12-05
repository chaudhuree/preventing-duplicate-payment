const transactionValidator = (req, res, next) => {
  const { sender, receiver, amount } = req.body;
  const recentTransaction = req.cookies.transaction;

  if (recentTransaction && recentTransaction.sender === sender && recentTransaction.receiver === receiver && recentTransaction.amount === amount) {
    return res.status(403).json({ error: 'Transaction not allowed within 1 minute.' });
  }

  res.cookie('transaction', { sender, receiver, amount }, { maxAge: 60000 }); // 1 minute expiration
  next();
};

module.exports = {
  transactionValidator,
};