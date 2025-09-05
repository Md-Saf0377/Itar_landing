import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-md rounded-lg bg-card p-8 text-center shadow-lg">
        <h1 className="mb-4 font-headline text-4xl font-bold">
          Thank You!
        </h1>
        <p className="mb-6 text-muted-foreground">
          To purchase items, please use the "Buy Now" buttons which will open an email to complete your order.
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
