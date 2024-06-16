module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Trend',
      externals: {
        react: 'React',
      },
    },
  },
  karma: {
    excludeFromCoverage: ['src/utils'],
  },
  webpack: {
    compat: {
      moment: ['de', 'en-gb', 'es', 'fr', 'it']
    }
  }
};