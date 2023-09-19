module.exports = {
  root: true,
  extends: ['@react-native',, 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.android.js', '*.ios.js'],
      rules: {
        'react-native/no-inline-styles': 0,
        'prettier/prettier': [
          'error',
          {
            'no-inline-styles': false
          }
        ]
      }
    }
  ]
};
