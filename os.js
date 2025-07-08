
const os = require('os');
console.log(os.arch()); // Get the CPU architecture
console.log(os.freemem()/(1024*1024)); // Get the free memory in bytes
console.log(os.totalmem()/(1024*1024*1024)); // Get the total memory in bytes
console.log(os.hostname()); // Get the hostname of the operating system
console.log(os.platform()); // Get the platform of the operating system
console.log(os.userInfo()); // Get user information

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});