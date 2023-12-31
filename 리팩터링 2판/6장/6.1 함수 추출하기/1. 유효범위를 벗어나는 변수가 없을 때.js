const Clock = {
  today: new Date(),
};

function printOwing(invoice) {
  let outstanding = 0;

  function printBanner() {
    console.log('********************');
    console.log('****** 고객채무 ******');
    console.log('********************');
  }

  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)을 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  function printDetails() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleTimeString()}`);
  }

  // 세부 사항을 출력한다.
  printDetails();
}
