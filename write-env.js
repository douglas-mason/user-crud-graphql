const fs = require('fs');

const writeEnvVars = () => {
  fs.writeFile(
    './src/env.js',
    `
export default {
  GRAPHQL_ENDPOINT: "${process.env.GRAPHQL_ENDPOINT}",
  GRAPHQL_API_KEY: "${process.env.GRAPHQL_API_KEY}",
};
`,
    (err) => {
      if (err) {
        console.error('error writing env vars', err);
        return;
      }
      console.info('finished writing env vars');
    }
  );
};

console.info('writing env vars');
writeEnvVars();
