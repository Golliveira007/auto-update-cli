const simpleGit = require('simple-git');

async function cloneRepo(url, dir) {
  const git = simpleGit();
  return git.clone(url, dir);
}

async function prepareRepo(git, upstreamUrl, branch) {
  await git.addRemote('upstream', upstreamUrl).catch(() => {});
  await git.fetch('upstream');
  await git.pull(['--no-ff', 'upstream', branch]);
}

async function pushRepo(git) {
  await git.push();
}

module.exports = { cloneRepo, prepareRepo, pushRepo };
