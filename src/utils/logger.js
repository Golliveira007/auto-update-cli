const chalk = require('chalk');

export function info(msg) {
  console.log(chalk.cyan(msg));
}

export function success(msg) {
  console.log(chalk.green(msg));
}

export function error(msg) {
  console.log(chalk.red(msg));
}


