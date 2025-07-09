import path from 'path';
import * as fs from 'fs';
import simpleGit from 'simple-git';
import { exec } from 'child_process';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { cloneRepo, prepareRepo, pushRepo, gitCommit } from './gitOperations.js';
import os from 'os';

async function updateRepo({ cloneUrl, upstreamUrl, branch }) {
  const repoName = path.basename(cloneUrl, '.git');
  
  const homeDir = os.homedir();
  const repoBaseDir = path.join(homeDir, 'Downloads', 'repositories');
  const repoDir = path.join(repoBaseDir, repoName);

  if (!fs.existsSync(repoBaseDir)) {
    fs.mkdirSync(repoBaseDir, { recursive: true });
  }

  if (!fs.existsSync(repoDir)) {
    console.log(chalk.blue(`📦 Clonando ${repoName}...`));
    await cloneRepo(cloneUrl, repoDir);
  }

  const git = simpleGit(repoDir);
  

  console.log(chalk.yellow(`🔧 Atualizando ${repoName}...`));

  try {
    await prepareRepo(git, upstreamUrl, branch);
  } catch (err) {
    console.log(chalk.red(`❌ Conflito em ${repoName}, abrindo VS Code...`));
    exec(`code ${repoDir}`);
    await inquirer.prompt([
      {
        type: 'confirm',
        name: 'done',
        message: `Você resolveu os conflitos em ${repoName}?`,
        default: false
      }
    ]);

    await gitCommit(git, repoDir);
  }

  await pushRepo(git);
  console.log(chalk.green(`✅ ${repoName} atualizado com sucesso!\n`));
}

export { updateRepo };
