export const HOW_IT_WORKS_STEPS = [
  {
    title: "Tell us what needs to be renewed",
    text: "Send us the document and its expiry date.",
    icon: "/clients-icons/step-share.svg",
  },
  {
    title: "Get a clear quote",
    text: "We show you the government fees, third-party costs and our service fee separately.",
    icon: "/clients-icons/step-quote.svg",
  },
  {
    title: "We handle the process",
    text: "Our team prepares, submits and follows up on the renewal while keeping you updated.",
    icon: "/clients-icons/step-process.svg",
  },
  {
    title: "Receive your renewed document",
    text: "Once completed, we send you the renewed document and can track its next expiry date for you.",
    icon: "/clients-icons/step-deliver.svg",
  },
] as const;

export const LICENSE_SERVICE_FEE = {
  currency: "AED",
  amount: 299,
  name: "UAE License Renewal Service Fee",
  description:
    "Professional service fee for handling UAE trade license renewal. Government and authority fees are paid separately at official cost.",
} as const;
