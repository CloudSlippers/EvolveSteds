"use client";

type WhatsAppButtonProps = {
  productTitle: string;
  productSlug: string; // pass the slug or id for URL
};

export default function WhatsAppButton({ productTitle, productSlug }: WhatsAppButtonProps) {
  const whatsappNumber = "447561669494"; // replace with your WhatsApp number (incl country code, no +)

  const message = `Hi, I want to order ${productTitle} from https://evolvesteds.com/products/${productSlug}`;

  return (
    <button
      onClick={() => {
        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }}
      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition hover:cursor-pointer"
    >
      Place Order on WhatsApp
    </button>
  );
}
