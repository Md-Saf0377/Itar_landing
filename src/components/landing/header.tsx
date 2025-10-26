
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
import { ThemeToggle } from './theme-toggle';

const bestsellers = [
  { title: "Radical Rose", href: "#bestsellers" },
  { title: "Misk Rijali", href: "#bestsellers" },
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

const mobileNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#bestsellers", label: "Bestsellers" },
  { href: "#categories", label: "Categories" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="container mx-auto flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-4" prefetch={false}>
          <Leaf className="h-6 w-6" />
          <span className="ml-2 font-headline text-lg font-semibold">Kaab Fragrances</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#home"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-black hover:text-white active:bg-black active:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-black hover:text-white active:bg-black active:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black">
                  Shop
                </NavigationMenuTrigger>
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
                <NavigationMenuLink asChild>
                  <Link
                    href="#about"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-black hover:text-white active:bg-black active:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#testimonials"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-black hover:text-white active:bg-black active:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
                    )}
                  >
                    Testimonials
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#contact"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-black hover:text-white active:bg-black active:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side (Cart + Mobile Menu) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
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
                  {mobileNavLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-lg"
                      onClick={(e) => handleMobileLinkClick(e, href)}
                    >
                      {label}
                    </Link>
                  ))}
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
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem";
