
"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function CartSheet() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const checkoutMessage = `I would like to purchase the following items:\n\n${cartItems.map(item => `${item.quantity}x ${item.name} (${item.size}ml)`).join('\n')}\n\nPlease provide me with payment and shipping details.`;
  const checkoutWhatsappLink = `https://wa.me/918088603853?text=${encodeURIComponent(checkoutMessage)}`;

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
                {cartItems.map((item) => {
                  const buyNowMessage = `I would like to purchase ${item.quantity}x ${item.name} (${item.size}ml). Please provide me with payment and shipping details.`;
                  const buyNowWhatsappLink = `https://wa.me/918088603853?text=${encodeURIComponent(buyNowMessage)}`;
                  return (
                    <li key={item.id} className="flex items-start gap-4">
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
                        <p className="text-sm text-muted-foreground">Size: {item.size}ml</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value, 10))
                            }
                            className="h-8 w-16"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                          <a href={buyNowWhatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Button variant="outline" size="sm" className="border border-black/20 bg-white/20 text-foreground backdrop-blur-sm hover:bg-black hover:text-white active:bg-black active:text-white dark:border-white/20 dark:bg-black/20 dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black" asChild={false}>Buy Now</Button>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Separator />
            <SheetFooter>
                <a href={checkoutWhatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full" size="lg">Checkout</Button>
                </a>
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
