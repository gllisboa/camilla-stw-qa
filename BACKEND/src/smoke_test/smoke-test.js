const { exec } = require('child_process');

// Update with the correct path to your shell script
const shellScriptPath = './src/smoke_test/smoke-test.sh';

exec(`powershell -Command "& { .\\${shellScriptPath}" }`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing the shell script: ${error}`);
    return;
  }

  console.log('Shell script executed successfully');
  console.log('Output:', stdout);
});
