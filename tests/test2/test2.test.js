const puppeteer = require('puppeteer');

describe('some test', async () => {
  let originalTimeout = 0
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
  })

  // set default interval timeout for jasmine
  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  })

  it('phone error', async () => {
  const browser = await puppeteer.launch({
        headless: true
    });
  const page = await browser.newPage();
  await page.goto('https://dev02.sagiton.pl/www/sagiton-web-dev/praca/growth_hacker', { waitUntil: 'networkidle0'});
  await page.setViewport({width: 1920, height: 1080});
  await page.type('#name', 'bla bla bla', { delay: 100 });
  await page.
  expect(true).toBe(true)
  await browser.close();
  })
})
