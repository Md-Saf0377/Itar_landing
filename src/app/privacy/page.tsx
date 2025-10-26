import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 font-headline text-4xl font-bold">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Your privacy is important to us. This Privacy Policy explains how
                we collect, use, and protect your information.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                1. Information We Collect
              </h2>
              <p>
                We only collect information that you voluntarily provide to us
                when you initiate an order via email, such as your name, email
                address, and shipping address.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information you provide solely for the purpose of
                processing and fulfilling your order, including communication
                about payment and shipping.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                3. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                4. Data Security
              </h2>
              <p>
                We take reasonable precautions to protect your information.
                However, no method of transmission over the Internet is 100%
                secure.
              </p>
              <div className="mt-12 text-center">
                <Link href="/">
                  <Button>Back to Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
