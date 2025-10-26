import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 font-headline text-4xl font-bold">
              Terms of Service
            </h1>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Welcome to Kaab Fragrances. By accessing or using our website,
                you agree to be bound by these Terms of Service.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                1. Use of Our Service
              </h2>
              <p>
                You may use our site for personal, non-commercial purposes only.
                You agree not to misuse the service or help anyone else to do
                so.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                2. Orders and Payment
              </h2>
              <p>
                All orders are subject to acceptance and availability. We currently
                process orders via email. Payment and shipping details will be
                communicated to you after you initiate an order.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                3. Intellectual Property
              </h2>
              <p>
                All content on this site, including text, graphics, logos, and
                images, is the property of Kaab Fragrances and is protected by
                copyright laws.
              </p>
              <h2 className="font-headline text-2xl font-bold text-foreground">
                4. Limitation of Liability
              </h2>
              <p>
                Our liability is limited to the maximum extent permitted by law.
                We are not liable for any indirect, incidental, or consequential
                damages.
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
