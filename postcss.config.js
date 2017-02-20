const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => (
                [
                  autoprefixer,
                ]
              ),
            },
          },
        ],
      },
    ],
  },
};
