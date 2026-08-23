const UAE_PREFIX = "+971";

export function getPhoneDigits(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("971")) {
    return digits.slice(3, 12);
  }

  return digits.slice(0, 9);
}

export function formatUaePhone(value: string): string {
  const digits = getPhoneDigits(value);

  if (!digits) {
    return "";
  }

  if (digits.length <= 2) {
    return `${UAE_PREFIX} ${digits}`;
  }

  if (digits.length <= 5) {
    return `${UAE_PREFIX} ${digits.slice(0, 2)} ${digits.slice(2)}`;
  }

  return `${UAE_PREFIX} ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
}

export function isPhoneEntered(value: string): boolean {
  return getPhoneDigits(value).length > 0;
}

export function isValidUaePhone(value: string): boolean {
  const digits = getPhoneDigits(value);
  return digits.length === 0 || digits.length >= 8;
}
