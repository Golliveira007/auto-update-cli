#!/usr/bin/env node

import chalk from 'chalk';
import { askRepositories } from './cli/promptUser.js';
import { updateRepo } from './core/repoManager.js';


(async () => {
  console.log(chalk.cyan('🚀 Iniciando automação...\n'));

  const repos = await askRepositories();

  for (const repo of repos) {
    await updateRepo(repo);
  }

  console.log(chalk.green('🏁 Processo concluído com sucesso!'));
})();
