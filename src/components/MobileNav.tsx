
import React, { useState } from 'react';
import { Menu, X, Briefcase, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface MobileNavProps {
  user?: any;
  onAuthClick: () => void;
  onSignOut?: () => void;
  currentPage?: 'home' | 'pricing';
}

const MobileNav = ({ user, onAuthClick, onSignOut, currentPage = 'home' }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
  ];

  if (currentPage === 'home') {
    navItems.splice(1, 0, 
      { href: '#value-props', label: 'Features' },
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#testimonials', label: 'Testimonials' }
    );
  }

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription>
              Navigate through the app
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-lg font-medium text-neutral-dark hover:text-amber-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              {user ? (
                <div className="space-y-3">
                  <div className="text-sm text-neutral-dark">
                    {user.email}
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      onSignOut?.();
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-600 flex items-center gap-2"
                  onClick={() => {
                    onAuthClick();
                    setOpen(false);
                  }}
                >
                  <Briefcase className="w-4 h-4" />
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
