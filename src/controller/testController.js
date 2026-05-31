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

  const decoded = Buffer.from(encoded, "base64").toString("utf8");

  const shell = new ShellExecuter();
  //맥북
  const command = `echo ${encoded} | base64 -d | write test2 tty${pts}`;

  // 리눅스
  const command2 = `echo ${encoded} | base64 -d | write test2 /dev/pts/${pts}`;
  const result = await shell.runAsync(command);
  res.json({ decoded, result });
};
