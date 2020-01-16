'use strict';
const puppeteer = require('puppeteer');
const fetch = require("node-fetch");
const axios = require('axios');

(async () => {

  // let renderedComponent = ""

  // axios.get("http://localhost:3000")
  //   .then((data) => {
  //     // console.log(data.data)
  //     renderedComponent = data.data
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // ------------------------------------------------------
  // WAYS TO SET DATA ONTO HEADLESS PUPPETEER
  // await page.goto('file:/Users/jotsarupsingh/sample_node/css_tricks/reactComponentImage/comp-image/src/renderedReact.html');
  // await page.goto('http://localhost:3000/');
  await page.setContent(renderedComponent, { waitUntil: 'networkidle0' })
  // ------------------------------------------------------


  // Adjustments particular to this page to ensure we hit desktop breakpoint.
  // page.setViewport({width: 1000, height: 600, deviceScaleFactor: 1});


  /**
   * Takes a screenshot of a DOM element on the page, with optional padding.
   *
   * @param {!{path:string, selector:string, padding:(number|undefined)}=} opts
   * @return {!Promise<!Buffer>}
   */
  async function screenshotDOMElement(opts = {}) {
    const padding = 'padding' in opts ? opts.padding : 0;
    const path = 'path' in opts ? opts.path : null;
    const selector = opts.selector;

    if (!selector)
      throw Error('Please provide a selector.');

    const rect = await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if (!element)
        return null;
      const { x, y, width, height } = element.getBoundingClientRect();
      return { left: x, top: y, width, height, id: element.id };
    }, selector);

    if (!rect)
      throw Error(`Could not find element that matches selector: ${selector}.`);

    return await page.screenshot({
      path,
      clip: {
        x: rect.left - padding,
        y: rect.top - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2
      }
    });
  }

  await screenshotDOMElement({
    path: 'example.png',
    selector: 'div.test',
    // padding: 16
  });

  browser.close();
})();