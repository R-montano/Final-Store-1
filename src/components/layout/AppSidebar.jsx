import Link from "next/link";
import { Home, Boxes, Rocket, Settings, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import ShoppingCart from "../cart/ShoppingCart";
import Logo from "./Logo";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: Boxes,
  },
  {
    title: "Landing",
    url: "/landing",
    icon: Rocket,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-violet-50 text-violet-500 font-semibold flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 px-3 py-3 rounded-md hover:bg-teal-100 transition-colors"
                    >
                      <item.icon className="text-teal-600" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Separator className="my-2" />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/admin/products"
                    className="flex items-center gap-2 px-3 py-3 rounded-md hover:bg-teal-100 transition-colors"
                  >
                    <Settings className="text-teal-600" />
                    <span>Admin</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <ShoppingCart />
            <SignOutButton>
              <Button>
                Salir <LogOut />
              </Button>
            </SignOutButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
