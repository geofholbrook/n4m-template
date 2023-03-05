import { execSync } from "child_process";
import { v4 as uuid } from "uuid";

describe("", () => {
  test("simulated npx command creates a directory", () => {
    const projectName = 'app-' + uuid().slice(0, 8);
    run(`node bin/index.js ${projectName}`);
    const lsOutput = run('ls');
    run(`rm -rf ${projectName}`)
    expect(lsOutput).toContain(projectName);
  });

  test("directory created by npx command contains a package.json file", () => {
    const projectName = 'app-' + uuid().slice(0, 8);
    run(`node bin/index.js ${projectName}`);
    const lsOutput = run(`ls ${projectName}`);
    run(`rm -rf ${projectName}`)
    expect(lsOutput).toContain('package.json');
  })
});

// this function runs a shell command
function run(cmd: string): string {
  return execSync(cmd).toString();

}
