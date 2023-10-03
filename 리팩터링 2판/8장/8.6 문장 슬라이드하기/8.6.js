const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.dicountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat === true) {
  discount += 20;
}
charge = charge - discount;
chargeOrder(charge);
