const ShellExecuter = require("../common/ShellExecuter");
const crypto = require("crypto");

exports.test = async (req, res) => {
  const { pts } = req.params;
  const payload = {
    id: crypto.randomUUID(),
    title: "title",
    body: "test test test",
    warning: "warning",
    severity: "system",
    time: new Date().toISOString().replace("Z", "+09:00"),
  };

  const encoded = Buffer.from(JSON.stringify(payload) + "\n").toString(
    "base64",
  );

  const shell = new ShellExecuter();
  const command = `echo ${encoded} | base64 -d | write test tty${pts}`;
  const result = await shell.runAsync(command);
  res.json({ command, result });
};
