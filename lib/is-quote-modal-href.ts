export const QUOTE_MODAL_HREFS = new Set(["#contact", "#contact-form"]);

export function isQuoteModalHref(href: string) {
  return QUOTE_MODAL_HREFS.has(href);
}
