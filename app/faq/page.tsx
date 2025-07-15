'use client'

import { useState } from 'react'
const faqData = [
  {
    question: 'How do I place an order?',
    answer:
      'You can place an order by browsing our products and clicking the "Place Order" button, which will open WhatsApp with your order details.',
  },
  {
    question: 'Are steroids legal to purchase?',
    answer:
      'Our products comply with all UK laws and regulations. We only offer legal supplements and research chemicals, not controlled substances.',
  },
  {
    question: 'What types of steroids do you sell?',
    answer:
      'We focus on safe, research-backed supplements designed to support your performance and recovery goals.',
  },
  {
    question: 'How do I know which steroids are right for me?',
    answer:
      'We recommend consulting a healthcare professional before starting any new supplement regimen. Our product descriptions also include guidance.',
  },
  {
    question: 'Do I need a prescription to purchase steroids from your company?',
    answer:
      'No prescription is required for any of our products as they are legal supplements, not prescription medications.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Delivery usually takes 3-5 business days within the UK. International shipping times may vary.',
  },
  {
    question: 'Do you offer discounts for bulk orders?',
    answer:
      'Yes! Please contact us via WhatsApp to discuss bulk order pricing and special offers.',
  },
  {
    question: 'Which oil is used in your products?',
    answer:
      'We use high-quality pharmaceutical-grade oils sourced from trusted suppliers to ensure safety and effectiveness.',
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map(({ question, answer }, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left border-b border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="font-semibold text-lg">{question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 py-4 text-gray-800 dark:bg-zinc-900 dark:text-gray-400">
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
