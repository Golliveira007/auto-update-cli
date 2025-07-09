import inquirer from 'inquirer';

export async function askRepositories() {
  const orderLabels = [
    'Backend v1',
    'Backend v2',
    'Frontend',
    'App'
  ];

  const repos = [];

  for (let i = 0; i < orderLabels.length; i++) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'cloneUrl',
        message: `URL do repositório (${orderLabels[i]}):`
      },
      {
        type: 'input',
        name: 'branch',
        message: `Branch principal do repositório (${orderLabels[i]}):`,
        default: i === 3 ? 'main' : 'master' // app usa main
      }
    ]);

    repos.push({
      cloneUrl: answers.cloneUrl,
      branch: answers.branch
    });
  }

  return repos;
}
