"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Lock } from "lucide-react";

const CORRECT_PIN = "80085";
const STORAGE_KEY = "house-of-order-access";

export function ComingSoonGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user has already authenticated
    const stored = localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(stored === "true");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect PIN. Please try again.");
      setPin("");
    }
  };

  // Show nothing while checking authentication status
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-teal border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If authenticated, show the main content
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Show coming soon gate
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-terracotta rounded-sm"></div>
              <div className="w-4 h-4 bg-gold rounded-full"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-teal rounded-sm"></div>
              <div className="w-4 h-4 bg-sage rounded-sm"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-semibold text-teal mb-2">
            House <span className="text-terracotta italic">of</span> Order
          </h1>
          <p className="text-teal/70">Curating Order. Creating Harmony.</p>
        </div>

        <Card className="bg-cream-dark border-0 shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-sage" />
            </div>
            <CardTitle className="text-2xl text-teal">Coming Soon</CardTitle>
            <CardDescription className="text-teal/70">
              We&apos;re putting the finishing touches on something special. Enter the PIN to preview.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pin" className="text-teal flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Access PIN
                </Label>
                <Input
                  type="password"
                  id="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter PIN"
                  className="rounded-xl bg-cream border-border text-teal h-12 text-center text-lg tracking-widest"
                  maxLength={10}
                  autoComplete="off"
                />
              </div>
              {error && (
                <p className="text-terracotta text-sm text-center">{error}</p>
              )}
              <Button
                type="submit"
                variant="accent"
                size="xl"
                rounded="full"
                className="w-full"
              >
                Enter Site
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-teal/50 text-sm mt-8">
          Professional Home Organizing & Styling
        </p>
      </div>
    </div>
  );
}
