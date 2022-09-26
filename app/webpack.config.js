module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  }