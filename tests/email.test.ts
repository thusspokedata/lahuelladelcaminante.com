import { describe, it, expect } from 'vitest';
import { encodeEmail, decodeEmail } from '../src/i18n/email';

describe('email codec', () => {
  const addr = 'contact@nohuella.eu';
  it('base64-encodes the address', () => {
    expect(encodeEmail(addr)).toBe('Y29udGFjdEBub2h1ZWxsYS5ldQ==');
  });
  it('round-trips', () => {
    expect(decodeEmail(encodeEmail(addr))).toBe(addr);
  });
  it('encoded form does not contain the plaintext address', () => {
    expect(encodeEmail(addr).includes('contact@')).toBe(false);
  });
});
