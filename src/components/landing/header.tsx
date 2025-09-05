"use client"
import Link from 'next/link';
import { Leaf } from 'lucide-react';
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

const collections = [
    { title: "Midnight Bloom", href: "#collection" },
    { title: "Sunkissed Citrus", href: "#collection" },
    { title: "Velvet Rose", href: "#collection" },
    { title: "Vanilla Powder", href: "#collection" },
    { title: "Crystal Saffron", href: "#collection" },
    { title: "Radical Rose", href: "#collection" },
    { title: "Parisian Musc", href: "#collection" },
    { title: "Falcon Leather", href: "#collection" },
    { title: "Neroli Oranger", href: "#collection" },
    { title: "Encens Suave", href: "#collection" },
    { title: "French Flower", href: "#collection" },
    { title: "Bois d'Ébène", href: "#collection" },
    { title: "Santal Austral", href: "#collection" },
    { title: "Cologne Cedrat", href: "#collection" },
]

export default function Header() {
  const collectionsColSize = Math.ceil(collections.length / 3);
  const collectionsCol1 = collections.slice(0, collectionsColSize);
  const collectionsCol2 = collections.slice(collectionsColSize, collectionsColSize * 2);
  const collectionsCol3 = collections.slice(collectionsColSize * 2);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <Leaf className="h-6 w-6" />
          <span className="ml-2 font-headline text-lg font-semibold">Itar</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="absolute left-0 top-0 w-screen border-b bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="container mx-auto grid grid-cols-4 gap-4 p-4 py-6">
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Best Seller</h3>
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
                    <div className="col-span-2">
                      <h3 className="mb-2 text-sm font-semibold">Collections</h3>
                      <div className="grid grid-cols-3 gap-x-4">
                         <ul className="space-y-1">
                          {collectionsCol1.map((item) => (
                            <ListItem key={item.title} href={item.href} title={item.title} />
                          ))}
                        </ul>
                        <ul className="space-y-1">
                          {collectionsCol2.map((item) => (
                            <ListItem key={item.title} href={item.href} title={item.title} />
                          ))}
                        </ul>
                         <ul className="space-y-1">
                          {collectionsCol3.map((item) => (
                            <ListItem key={item.title} href={item.href} title={item.title} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
