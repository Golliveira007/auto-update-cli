const chalk = require('chalk');

function info(msg) {
  console.log(chalk.cyan(msg));
}

function success(msg) {
  console.log(chalk.green(msg));
}

function error(msg) {
  console.log(chalk.red(msg));
}

module.exports = { info, success, error };
