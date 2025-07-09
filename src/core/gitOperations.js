import simpleGit from 'simple-git';


export async function name(params) {
  const git = simpleGit();
  await git.cwd(repoDir);
  return git;
}

export async function cloneRepo(url, dir) {
  const git = simpleGit();
  return git.clone(url, dir);
}

export async function prepareRepo(git, upstreamUrl, branch) {
  await git.addRemote('upstream', upstreamUrl).catch(() => {});
  await git.fetch('upstream');
  await git.pull(['--no-ff', 'upstream', branch]);
}

export async function gitCommit(git, repoDir){
  await git.add([repoDir]);
  await git.commit("feat: resolve conflix conflict");
}

export async function pushRepo(git) {
  await git.push();
}


