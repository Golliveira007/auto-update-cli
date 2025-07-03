const path = require('path');
const fs = require('fs');
const simpleGit = require('simple-git');
const { exec } = require('child_process');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { cloneRepo, prepareRepo, pushRepo } = require('./gitOperations');

async function updateRepo({ cloneUrl, upstreamUrl, branch }) {
  const repoName = path.basename(cloneUrl, '.git');
  const repoDir = path.join(__dirname, '..', '..', repoName);

  if (!fs.existsSync(repoDir)) {
    console.log(chalk.blue(`📦 Clonando ${repoName}...`));
    await cloneRepo(cloneUrl, repoDir);
  }

  const git = simpleGit(repoDir);
  await git.cwd(repoDir);

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
  }

  await pushRepo(git);
  console.log(chalk.green(`✅ ${repoName} atualizado com sucesso!\n`));
}

module.exports = { updateRepo };
