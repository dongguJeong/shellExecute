const { promisify } = require("util");
const { exec } = require("child_process");
const execAsync = promisify(exec);

class ShellExecuter {
  async runAsync(command) {
    try {
      const { stdout, stderr } = await execAsync(command);
      console.log(stdout, stderr);
      return { stdout, stderr };
    } catch (e) {
      console.error(e);
      return { error: e };
    }
  }
}

module.exports = ShellExecuter;
