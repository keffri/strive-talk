module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.1.4',
      skipMD5: true,
    },
    instance: {},
    autoStart: false,
  },
  mongoURLEnvName: process.env.MONGODB_APPCODE,
};
