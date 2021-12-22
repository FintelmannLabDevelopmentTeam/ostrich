const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')
const { spawnSync } = require('child_process');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const BROWSER_PATH = undefined;
const HEADLESS = true;

module.exports = async function() {
    console.log(chalk.green('\nCreating new build...'));
    
    const child = spawnSync('npm', ['run', 'build']);

    console.log(chalk.green('Setup Puppeteer...'));
    const browser = await puppeteer.launch({ headless: HEADLESS, executablePath: BROWSER_PATH});
    // This global is not available inside tests but only in global teardown
    global.__BROWSER_GLOBAL__ = browser;
    // Instead, we expose the connection details via file system to be used in tests
    mkdirp.sync(DIR);
    fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
