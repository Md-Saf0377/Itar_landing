"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function CartSheet() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto pr-4">
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.name} className="flex items-start gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="mt-2 flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.name, parseInt(e.target.value, 10))
                          }
                          className="h-8 w-16"
                        />
                         <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.name)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                        <Link href="/checkout" passHref>
                           <Button variant="outline" size="sm">Buy Now</Button>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
            <SheetFooter>
                <Link href="/checkout" passHref className="w-full">
                    <Button className="w-full" size="lg">Checkout</Button>
                </Link>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p>Your cart is empty.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
