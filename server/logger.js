/** 
  * @title: server/logger.js
  * @description: 控制台输出的日志
  * @author: liubo
  * @date: 2021-07-30 09:50:47
  */

const ip = require("ip");
const chalk = require("chalk")

const divider = chalk.gray("\n--------------------------------------");

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server startde ! ${chalk.green("✓")}`);

    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green("✓")}`);
    }

    console.log(`
      ${chalk.bold("Access URLs:")}${divider}
      Localhost: ${chalk.magenta(`http://${host}:${port}`) + (tunnelStarted ? `\n   Proxy: ${chalk.magenta(tunnelStarted)}` : "")}${divider}${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `)
  }
}

module.exports = logger;