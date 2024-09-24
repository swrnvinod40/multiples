
let remainingQty = 10

1 * 1.38 (2 qty) = 1.38
1 * 2.57 (3 qty) = 2.57


5 qty =  line 2, line 1
4 qty = 2 * line 1


rules = [

  {
    name:2fr, trigger qty 2
    individual = 1.38, applicable qty 2
    totalDiscount = 2.76
  },
  {
    name:3fr, trigger qty 3
    individual = 2.57, applicable qty 1
    totalDiscount = 2.57
  }
]




{
  name:1fr, trigger qty 1
  individual = 1.00, qty 1
  totalDiscount = 1.0
},