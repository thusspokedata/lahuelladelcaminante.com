import { describe, it, expect } from 'vitest';
import { encodeEmail, decodeEmail } from '../src/i18n/email';

describe('email codec', () => {
  const addr = 'contact@lahuelladelcaminante.com';
  it('base64-encodes the address', () => {
    expect(encodeEmail(addr)).toBe('Y29udGFjdEBsYWh1ZWxsYWRlbGNhbWluYW50ZS5jb20=');
  });
  it('round-trips', () => {
    expect(decodeEmail(encodeEmail(addr))).toBe(addr);
  });
  it('encoded form does not contain the plaintext address', () => {
    expect(encodeEmail(addr).includes('contact@')).toBe(false);
  });
});
