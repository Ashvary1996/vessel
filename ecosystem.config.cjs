module.exports = {
  apps: [
    {
      name: "vessel-backend",
      script: "index.js",
      cwd: "./server",   //   important when ypu config file in fiffenr place 
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