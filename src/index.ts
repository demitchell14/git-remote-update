import * as path from "path";
import * as fs from "fs";

const root = process.cwd();

const packageFile = path.join(root, "package.json");

const packageJson = fs.readFileSync(packageFile).toString("UTF-8");

console.log(JSON.parse(packageJson));

