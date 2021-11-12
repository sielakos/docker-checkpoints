function createPrintI(i) {
  return () => {
    console.log(`i = ${i}`);
    return createPrintI(i + 1);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let printI = createPrintI(0);

async function run() {
  while (true) {
    printI = printI();
    await delay(2000);
  }
}

run().then(() => {});
