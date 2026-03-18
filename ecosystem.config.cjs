module.exports = {
  apps: [
    {
      name: "vessel-server",
      script: "index.js",
      cwd: "./server", // location of file
      instances: 1,
      autorestart: true,
      watch: false,
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