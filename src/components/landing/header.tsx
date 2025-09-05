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
                <div className="grid w-[600px] grid-cols-3 gap-4 p-4">
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Best Seller</h3>
                    <ul className="space-y-1">
                      {bestsellers.map((item) => (
                        <li key={item.title}>
                           <NavigationMenuLink asChild>
                            <Link href={item.href} className="text-sm hover:underline">{item.title}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Categories</h3>
                    <ul className="space-y-1">
                      {categories.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link href={item.href} className="text-sm hover:underline">{item.title}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <h3 className="font-semibold text-sm mb-2">Collections</h3>
                     <ul className="space-y-1 h-48 flex flex-col flex-wrap">
                      {collections.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link href={item.href} className="text-sm hover:underline">{item.title}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
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
