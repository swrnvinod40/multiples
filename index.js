const _ = require('lodash');

let rules = [
  {
    name: '2x',
    slins: ['789', '689', '589'],
    price: 158,
    quantity: 2,
  },
  {
    name: '3x',
    slins: ['789', '689', '589'],
    price: 258,
    quantity: 3,
  },
];

let cart = {
  items: [
    {
      id: 0,
      name: 'fox',
      slin: '789',
      amount: 319,
      quantity: 2,
    },
    {
      id: 1,
      name: 'millet',
      slin: '689',
      amount: 319,
      quantity: 2,
    },
    {
      id: 2,
      name: 'tail',
      slin: '589',
      amount: 319,
      quantity: 2,
    },
  ],
};

function resolve(cart, rules) {
  rules.forEach((rule) => {
    let slins = rule.slins;
    let cartItems = cart.items.filter((item) => slins.includes(item.slin));
    console.log(cartItems);
    let qualifiedQuantity = _.sumBy(cartItems, 'quantity');
    console.log('qualified quantity ', qualifiedQuantity);
    let combinationsArray = combinations(rule, qualifiedQuantity);
    console.log({...combinationsArray});
  });
}

function combinations(rule, remainingQuantity, combinationsArray = []) {
  console.log('cal ', remainingQuantity % rule.quantity);
  if (remainingQuantity > 0 && remainingQuantity >= rule.quantity) {
    if (remainingQuantity % rule.quantity == 0) {
      combinationsArray.push(remainingQuantity / rule.quantity);
      remainingQuantity = remainingQuantity - (remainingQuantity / rule.quantity) * rule.quantity
      console.log('if');
    } else {
      console.log('else');
      combinationsArray.push(Math.floor(remainingQuantity / rule.quantity));
      remainingQuantity =
        remainingQuantity -
        Math.floor(remainingQuantity / rule.quantity) * rule.quantity;
      combinations(rule, remainingQuantity, combinationsArray);
    }
  }
  return { combinationsArray, remainingQuantity };
}
resolve(cart, rules);
