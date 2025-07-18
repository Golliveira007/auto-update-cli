#!/usr/bin/env node

import chalk from 'chalk';
import { askRepositories } from './cli/promptUser.js';
import { updateRepo } from './core/repoManager.js';
import { appBuild } from './core/dpInstall.js';
import path from 'path';
import os from 'os';

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

  const appRepo = reposWithUpstream[3];
  const appRepoName = path.basename(appRepo.cloneUrl, '.git');
  const appRepoPath = path.join(os.homedir(), 'Downloads', 'repositories', appRepoName);

  await appBuild(appRepoPath);

  console.log(chalk.green('🏁 Processo concluído com sucesso!'));
})();
