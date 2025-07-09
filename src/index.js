#!/usr/bin/env node

import chalk from 'chalk';
import { askRepositories } from './cli/promptUser.js';
import { updateRepo } from './core/repoManager.js';

(async () => {
  console.log(chalk.cyan('🚀 Iniciando automação...\n'));

  const repos = await askRepositories();

  const upstreamRepos = [
    'git@bitbucket.org:yazo-app/base-streaming-server.git',
    'git@bitbucket.org:yazo-app/base-streaming-server-v2.git',
    'git@bitbucket.org:yazo-app/base-streaming-client.git',
    'git@bitbucket.org:yazo-app/base-app-client.git'
  ];

  const reposWithUpstream = repos.map((repo, index) => ({
    ...repo,
    upstreamUrl: upstreamRepos[index]
  }));

  for (const repo of reposWithUpstream) {
    await updateRepo(repo);
  }

  console.log(chalk.green('🏁 Processo concluído com sucesso!'));
})();
