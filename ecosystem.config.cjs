module.exports = {
  apps: [
    {
      name: "vessel-server",
      script: "index.js",
      cwd: "./server", // location of file
      instances: 1,
      autorestart: true,
      watch: false,  // true for development 
      // ignore_watch: ["node_modules", "logs"], // don’t watch these folders
      env: {
        PORT: 8000,
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