#!/usr/bin/env node

const chalk = require('chalk');
const { askRepositories } = require('./cli/promptUser');
const { updateRepo } = require('./core/repoManager');

(async () => {
  console.log(chalk.cyan('🚀 Iniciando automação...\n'));

  const repos = await askRepositories();

  for (const repo of repos) {
    await updateRepo(repo);
  }

  console.log(chalk.green('🏁 Processo concluído com sucesso!'));
})();
