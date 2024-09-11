export function getAppVersion(): string {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('../package.json').version;
}
