const User = require("../models/auth.model");
const Order = require("../models/orders.model");
const expressJwt = require("express-jwt");

exports.readController = (req, res) => {
  const userId = req.params.id;
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
};

exports.readOrderController = (req, res) => {
  const userId = req.params.id;
  Order.find({}).exec((err, order) => {
    if (err || !order) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    res.json(order);
  });
};

exports.writeOrderController = async (req, res) => {
    console.log("order badket", req.body.data)
  try {
    const { orderDate, orderBasket, orderTotal, orderId, forUser } = req.body.data;

    let user = await User.findById(forUser);
    console.log(user._id);
    let order = await new Order({
        orderId,
      orderDate,
      orderBasket,
      orderTotal,
      user: user._id,
    }).save();

    return res.send(order);
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
};
