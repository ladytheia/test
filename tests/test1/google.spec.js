const puppeteer = require('puppeteer');
const looksSame = require('looks-same');
const fs = require('fs');

test('some test', async function() {
  const browser = await puppeteer.launch({
	headless: true
});
  const page = await browser.newPage();
  await page.goto('https://dev02.sagiton.pl/www/sagiton-web-dev/praca/growth_hacker', { waitUntil: 'networkidle0'});
  await page.setViewport({width: 1920, height: 1080});
 // await page.type('#name', 'bla bla bla', { delay: 100 });
  await page.screenshot({path: 'test.png'});

  looksSame('test.png', 'test-old.png', function(error, equal) {
    if(equal) {
	  fs.copyFile('test.png', 'test.old.png', () => {})
    } else {
	  looksSame.createDiff({
   	    reference: 'test.png',
	    current: 'test-old.png',
 	    diff: 'diff.png',
    	highlightColor: '#ff00ff',
	    ignoreAntialiasing: true,
	    pixelRatio: 1,
	    strict: true,
	   }, function(error) {
	   });
    }
  });

  await browser.close();
})
