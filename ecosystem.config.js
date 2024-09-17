module.exports = {
    apps: [
      {
        name: 'mplb-frontend',
        script: 'serve',
        args: '-s build',
        env: {
          PORT: 3000
        }
      }
    ]
  };
  