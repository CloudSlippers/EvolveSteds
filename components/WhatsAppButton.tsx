"use client";

type WhatsAppButtonProps = {
  productTitle: string;
};

export default function WhatsAppButton({ productTitle }: WhatsAppButtonProps) {
  return (
    <button
      onClick={() => {
        window.open(
          `https://wa.me/YOURNUMBER?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(
            productTitle
          )}`,
          '_blank'
        );
      }}
      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
    >
      Place Order on WhatsApp
    </button>
  );
}
