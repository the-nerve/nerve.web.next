import { boolEnv, listEnv, numberEnv, resolveEnvVar, resolveRequiredEnvVar } from '..';

describe('environment variable utilities', () => {
  test('resolveEnvVar', () => {
    expect(resolveEnvVar('value')).toBe('value');
    expect(resolveEnvVar(undefined)).toBe(undefined);
    expect(resolveEnvVar(undefined, 'default')).toBe('default');
  });

  test('resolveRequiredEnvVar', () => {
    process.env.CI = undefined;
    expect(resolveRequiredEnvVar('ENV_VAR', 'value')).toBe('value');
    expect(() => resolveRequiredEnvVar('ENV_VAR', undefined)).toThrow();
  });

  test('boolEnv', () => {
    expect(boolEnv('true')).toBe(true);
    expect(boolEnv('TRUE')).toBe(true);
    expect(boolEnv('yes')).toBe(true);
    expect(boolEnv('YES')).toBe(true);
    expect(boolEnv('on')).toBe(true);
    expect(boolEnv('ON')).toBe(true);
    expect(boolEnv('1')).toBe(true);

    expect(boolEnv(undefined)).toBe(false);
    expect(boolEnv('false')).toBe(false);
    expect(boolEnv('no')).toBe(false);
    expect(boolEnv('off')).toBe(false);
    expect(boolEnv('0')).toBe(false);
    expect(boolEnv('xyz')).toBe(false);
  });

  test('numberEnv', () => {
    expect(numberEnv('123')).toBe(123);
    expect(numberEnv('1.0')).toBe(1.0);
    expect(numberEnv('ABC123')).toBe(0);
    expect(numberEnv('0')).toBe(0);
    expect(numberEnv('')).toBe(0);
    expect(numberEnv(undefined)).toBe(0);
  });

  test('listEnv', () => {
    expect(listEnv('a')).toEqual(['a']);
    expect(listEnv('a,b')).toEqual(['a', 'b']);
    expect(listEnv('a, b, c')).toEqual(['a', 'b', 'c']);
    expect(listEnv('')).toEqual([]);
    expect(listEnv(undefined)).toEqual([]);
  });
});
