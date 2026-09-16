export function encodeEmail(addr: string): string {
  return Buffer.from(addr, 'utf-8').toString('base64');
}

export function decodeEmail(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}
