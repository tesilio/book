const Clock = {
  today: new Date(),
};

function printBanner() {
  console.log('********************');
  console.log('****** 고객채무 ******');
  console.log('********************');
}

// 상세 내역을 출력한다.
function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleTimeString()}`);
}

  // 마감일(dueDate)을 기록한다.
function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

  // 미해결 채무(outstanding)를 계산한다.
function calculateOutstanding(invoice) {
  let result = 0;
  for (const order of invoice.orders) {
    result += order.amount;
  }
  return result;
}

function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}
