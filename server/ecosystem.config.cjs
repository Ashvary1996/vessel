module.exports = {
  apps: [
    {
      name: "server1",
      script: "index.js",
      // cwd: "./server", // location of file
      instances: 4,
      autorestart: true,
      // watch: false,  // true for development 
      // ignore_watch: ["node_modules", "logs"], // don’t watch these folders
      env: {
        PORT: 8000,
      },
    },
    {
      name: "server2",
      script: "index.js",
      // cwd: "./server", // location of file
      instances: 2,
      autorestart: true,
      // watch: false,  // true for development 
      // ignore_watch: ["node_modules", "logs"], // don’t watch these folders
      env: {
        PORT: 8001,
      },
    },
    {
      name: "server3",
      script: "index.js",
      // cwd: "./server", // location of file
      instances: 3,
      autorestart: true,
      // watch: false,  // true for development 
      // ignore_watch: ["node_modules", "logs"], // don’t watch these folders
      env: {
        PORT: 8002,
      },
    },

    // {
    //   name: "frontend",
    //   script: "npm",
    //   args: "start",
    //   cwd: "./client",
    // },

  ],
};