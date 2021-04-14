const webDriver = require('selenium-webdriver');
const driver = new webDriver.Builder().forBrowser('firefox').build();
const By = webDriver.By;

(async function testRun () {
    await driver.get('https://google.com');
    const searchField = driver.findElement(By.xpath('//input[@title="Поиск"]'));
    searchField.sendKeys('selenium');
    await driver.sleep(1000);
    searchField.sendKeys(webDriver.Key.ENTER);
    await driver.sleep(3000);
    const results = await driver.findElements(By.xpath('//div[@class="g"]'));
    console.log(`Количество результатов: ${results.length}`);

    for (let element of results) {
        let text = await element.getText();
        console.log('----------------------------------');
        console.log(text);
        console.log('----------------------------------');
    }

    drive.close();
})();

//immediately invoked function expression