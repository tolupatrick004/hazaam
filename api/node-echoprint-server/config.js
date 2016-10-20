/**
 * Local configuration variables
 */

module.exports = {
  // Port that the web server will bind to
  web_port: 37760,

  // Database settings
  db_user: 'root',
  db_pass: 'Makinwa#37',
  db_database: 'hazaam',
  db_host: '127.0.0.1',

  // Set this to a system username to drop root privileges
  run_as_user: 'kesiena.akp',

  // Filename to log to
  log_path: __dirname + '/logs/echoprint.log',
  // Log level. Valid values are debug, info, warn, error
  log_level: 'debug',

  // Minimum number of codes that must be matched to consider a fingerprint
  // match valid
  code_threshold: 10,

  // Supported version of echoprint-codegen codes
  codever: '4.12'
};
