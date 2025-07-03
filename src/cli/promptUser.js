const inquirer = require('inquirer');

async function askRepositories() {
  const repos = [];

  const { total } = await inquirer.prompt({
    type: 'number',
    name: 'total',
    message: 'Quantos repositórios você quer atualizar?',
    default: 4
  });

  for (let i = 0; i < total; i++) {
    const answers = await inquirer.prompt([
      { type: 'input', name: 'cloneUrl', message: `URL do repositório #${i + 1}:` },
      { type: 'input', name: 'upstreamUrl', message: `URL do upstream:` },
      { type: 'input', name: 'branch', message: 'Branch principal:', default: 'master' }
    ]);
    repos.push(answers);
  }

  return repos;
}

module.exports = { askRepositories };
