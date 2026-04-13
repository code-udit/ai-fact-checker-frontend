"use client";

export default function Footer() {
  return (
    <footer className="w-full border-b border-white/10 bg-zinc-900 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Fact Checker 
      </div>
    </footer>
  );
}