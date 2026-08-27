type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export function checkRateLimit(
  clientId: string,
  maxRequests: number,
  windowMs: number,
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(clientId);

  if (!entry || now >= entry.resetAt) {
    rateLimitStore.set(clientId, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: maxRequests - entry.count };
}

export function validateJsonInput(
  bodyText: string,
  maxBytes: number,
): { valid: true } | { valid: false; error: string } {
  if (!bodyText || bodyText.trim().length === 0) {
    return { valid: false, error: "Empty body" };
  }

  if (Buffer.byteLength(bodyText, "utf8") > maxBytes) {
    return { valid: false, error: "Payload too large" };
  }

  try {
    JSON.parse(bodyText);
  } catch {
    return { valid: false, error: "Invalid JSON" };
  }

  return { valid: true };
}

const DANGEROUS_PATTERNS = [
  /<\s*script\b/i,
  /javascript\s*:/i,
  /on\w+\s*=/i,
  /<\s*iframe\b/i,
  /<\s*object\b/i,
  /<\s*embed\b/i,
  /\b(union\s+select|drop\s+table|insert\s+into)\b/i,
];

export function containsDangerousPatterns(value: string): boolean {
  return DANGEROUS_PATTERNS.some((pattern) => pattern.test(value));
}
