
"use client"
import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
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
          <span className="ml-2 font-headline text-lg font-semibold">Kaab Fragrances</span>
        </Link>
        <div className="hidden flex-1 md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#home" passHref legacyBehavior>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    <a href="#home">Home</a>
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
                 <Link href="#about" passHref legacyBehavior>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    <a href="#about">About</a>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                 <Link href="#testimonials" passHref legacyBehavior>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    <a href="#testimonials">Testimonials</a>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                 <Link href="#contact" passHref legacyBehavior>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:bg-black hover:text-white active:bg-black active:text-white")}>
                    <a href="#contact">Contact</a>
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
                    <Menu />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-4 flex flex-col space-y-4">
                    <Link href="#home" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="#bestsellers" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Bestsellers</Link>
                    <Link href="#categories" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
                    <Link href="#about" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="#testimonials" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
                    <Link href="#contact" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                  </nav>
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
  )
})
ListItem.displayName = "ListItem"
