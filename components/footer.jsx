import React, { useEffect } from 'react';
import Link from 'next/link';

const Chatbot = () => {
  useEffect(() => {
    // Append the Dialogflow Messenger script to the document head
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Paye"
      agent-id="1d285e14-6647-402f-9d27-4966028c44a1"
      language-code="en"
    ></df-messenger>
  );
};

export function Footer() {
  return (
    <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <p className="text-sm">
        <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80">
          Next.js on Netlify
        </Link>
      </p>
      <Chatbot />
    </footer>
  );
}
