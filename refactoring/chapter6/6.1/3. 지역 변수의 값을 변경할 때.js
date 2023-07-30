const Clock = {
  today: new Date(),
};

function printBanner() {
  console.log('********************');
  console.log('****** 고객채무 ******');
  console.log('********************');
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleTimeString()}`);
}

function recordDueDate(invoice) {
  // 마감일(dueDate)을 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing(invoice) {
  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}
