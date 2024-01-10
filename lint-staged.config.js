module.exports = {
  "*.{js,ts}": (files) => {
    const codeFiles = files
      .filter((filePath) => !filePath.startsWith("e2e"))
      .join(" ");
    return [`prettier --write ${codeFiles}`, `eslint ${codeFiles}`];
  },
};
