"use client"
import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import CartSheet from './cart-sheet';

const bestsellers = [
    { title: "Radical Rose", href: "#bestsellers" },
    { title: "Vanilla Powder", href: "#bestsellers" },
    { title: "Crystal Saffron", href: "#bestsellers" },
    { title: "Gift set", href: "#bestsellers" },
    { title: "Samples", href: "#bestsellers" },
]

const categories = [
    { title: "Extrait de Parfum", href: "#categories" },
    { title: "Eau de Parfum", href: "#categories" },
    { title: "Hand & Body", href: "#categories" },
    { title: "Hair Perfume", href: "#categories" },
    { title: "Discovery Set", href: "#categories" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="#" className="flex items-center mr-4" prefetch={false}>
          <Leaf className="h-6 w-6" />
          <span className="ml-2 font-headline text-lg font-semibold">Itar</span>
        </Link>
        <div className="hidden flex-1 md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#home" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-black hover:text-white active:bg-black active:text-white">Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[450px] grid-cols-2 gap-4 p-4">
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Bestsellers</h3>
                      <ul className="space-y-1">
                        {bestsellers.map((item) => (
                          <ListItem key={item.title} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Categories</h3>
                      <ul className="space-y-1">
                        {categories.map((item) => (
                           <ListItem key={item.title} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <Link href="#testimonials" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    Testimonials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
            <CartSheet />
             <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>Select a page to navigate to.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 p-4">
                    <Link href="#home" className="text-lg font-medium hover:underline" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="#bestsellers" className="text-lg font-medium hover:underline" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                      Bestsellers
                    </Link>
                    <Link href="#categories" className="text-lg font-medium hover:underline" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                      Categories
                    </Link>
                     <Link href="#about" className="text-lg font-medium hover:underline" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                      About
                    </Link>
                     <Link href="#testimonials" className="text-lg font-medium hover:underline" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                      Testimonials
                    </Link>
                     <Link href="#contact" className="text-lg font-medium hover:underline" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
