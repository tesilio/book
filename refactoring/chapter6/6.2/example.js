function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDricer) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}
