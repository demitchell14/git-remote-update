import * as path from "path";
import * as fs from "fs";
import git from "gift";

const root = process.cwd();

const packageFile = path.join(root, "package.json");

const packageJson = JSON.parse(fs.readFileSync(packageFile).toString("UTF-8"));

const repoLocation = packageJson.repository;
const version = packageJson.version;

const repo = git(repoLocation);

// console.log(repo)

repo.current_commit((err, commits) => {
    if (err)
        console.error(err)
    else
        console.log(commits)
})

// const repo = git.Git(repoLocation);

// console.log({repo, version})

