"use client";

import { useState } from "react";
import { analyzeContent } from "@/services/api";
import { ResultType } from "@/types";

import ResultCard from "@/components/ResultCard";
import ClaimsList from "@/components/ClaimsList";
import PatternsList from "@/components/PatternsList";
import HighlightedText from "@/components/HighlightedText";
import TestCases from "@/components/TestCases";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async () => {
    const trimmedText = text.trim();
    const trimmedUrl = url.trim();

    if (!trimmedText && !trimmedUrl) {
      setError("Enter text or URL");
      return;
    }

    setError(null);

    try {
      setLoading(true);

      const payload: { text?: string; url?: string } = {};
      if (trimmedText) payload.text = trimmedText;
      if (trimmedUrl) payload.url = trimmedUrl;

      const data = await analyzeContent(payload);
      setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setUrl("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-gray-100">
      <Header />

      <main className="flex-1 w-full px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main section */}
          <div className="md:col-span-2 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              AI Fact Checker
            </h1>

            {/* Form prevents browser autofill */}
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="w-full max-w-xl flex flex-col gap-4"
            >
              {!result && !loading && (
                <p className="text-gray-500 text-sm text-center">
                  Enter text and click Analyze to see results
                </p>
              )}

              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded">
                  {error}
                </div>
              )}

              <textarea
                autoComplete="off"
                placeholder="Paste text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-3 border border-gray-700 rounded-lg bg-black/60 text-white focus:outline-none focus:border-gray-400"
              />

              <input
                autoComplete="off"
                type="text"
                placeholder="Or paste article URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-700 rounded-lg bg-black/60 text-white focus:outline-none focus:border-gray-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-white text-black py-2 rounded-lg font-medium disabled:opacity-50 hover:bg-gray-200 transition"
              >
                {loading ? "Analyzing..." : "Analyze"}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="border border-red-400 text-red-300 py-2 rounded-lg hover:bg-red-200/20 transition"
              >
                Clear
              </button>

              {loading && (
                <div className="flex justify-center mt-4">
                  <div className="w-10 h-10 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>
                </div>
              )}

              {result && (
                <>
                  <ResultCard result={result} />

                  {(result.claims ?? []).length > 0 && (
                    <ClaimsList claims={result.claims ?? []} />
                  )}

                  {(result.highlights ?? []).length > 0 && (
                    <PatternsList highlights={result.highlights ?? []} />
                  )}

                  {text && (
                    <HighlightedText
                      text={text}
                      highlights={result.highlights ?? []}
                    />
                  )}
                </>
              )}
            </form>
          </div>

          {/* Right panel */}
          <div className="hidden md:block">
            <TestCases />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
