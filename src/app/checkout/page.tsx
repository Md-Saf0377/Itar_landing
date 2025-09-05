import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-md rounded-lg bg-card p-8 text-center shadow-lg">
        <h1 className="mb-4 font-headline text-4xl font-bold">
          Checkout
        </h1>
        <p className="mb-6 text-muted-foreground">
          This is a placeholder for the checkout process.
        </p>
        <Link href="/">
          <Button>
            Back to Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
