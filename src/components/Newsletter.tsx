import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      // Convert Google Form URL from /viewform to /formResponse
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScquy_wsmXrM9t1deacq4fia0Q1bzvZXW0bJfaRwg-dfh0oOA/formResponse';
      
      // Create the form iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Create the form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = 'hidden-iframe'; // Submit through the iframe
      iframe.name = 'hidden-iframe';

      // Add the email input
      const input = document.createElement('input');
      input.name = 'entry.710346588';
      input.value = email;
      form.appendChild(input);

      // Add the form to the document and submit it
      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      setStatus('success');
      setMessage("Thanks for subscribing! We'll keep you updated.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Please try again or contact forcreatorspace@gmail.com');
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-2">
          Join Our Community
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Get updates about new tools and features
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-6 py-4 rounded-full bg-brown-50/80 dark:bg-gray-800/80 
          backdrop-blur-sm border border-brown-200/20 dark:border-gray-700/20
          text-brown-800 dark:text-white placeholder-brown-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-brown-300/20 dark:focus:ring-brown-400/20"
          required
        />
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`absolute right-2 top-1/2 -translate-y-1/2 
          px-4 py-2 rounded-full bg-gradient-to-r from-brown-600 to-brown-700 
          text-white flex items-center gap-2 
          hover:shadow-lg hover:shadow-brown-600/20 transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className="hidden sm:inline">Subscribe</span>
          <Send className="w-4 h-4" />
        </button>
      </form>

      {message && (
        <div className={`mt-4 text-center text-sm ${
          status === 'success' ? 'text-green-600 dark:text-green-400' : 
          status === 'error' ? 'text-red-600 dark:text-red-400' : ''
        }`}>
          {message}
        </div>
      )}
    </div>
  );
} 