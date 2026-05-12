import nextConfig from 'eslint-config-next';

const config = [
  ...nextConfig,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      '@next/next/no-img-element': 'off',
    }
  }
];

export default config;
