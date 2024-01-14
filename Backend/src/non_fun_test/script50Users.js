const { execSync } = require('child_process');

// Get the number of users from the command line arguments
const numberUsers = process.argv[2] || 'default_value';

// Create a folder name based on the number of users
const reportFolder = `report_${50}`;

// Update the JMeter command to include the dynamic report folder name
const jmeterCommand = `libs\\apache-jmeter-5.6.2\\bin\\jmeter.bat -n -t src\\non_fun_test\\Test-Plan-DDD-Forum-Group-3.jmx -Jnumber_users=${50} -e -o src\\non_fun_test\\${reportFolder} -l src\\non_fun_test\\${reportFolder}\\results.txt`;

try {
  execSync(jmeterCommand, {
    stdio: 'inherit',
    shell: 'cmd'
  });
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
