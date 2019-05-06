"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const root = process.cwd();
const packageFile = path.join(root, "package.json");
const packageJson = fs.readFileSync(packageFile).toString("UTF-8");
console.log(JSON.parse(packageJson));
//# sourceMappingURL=index.js.map