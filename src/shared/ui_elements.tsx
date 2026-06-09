import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
// import Link from "next/link";



export function FullNavBar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand  href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Home</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink  href="/game_page/">Game</NavbarLink>
        <NavbarLink href="/subpage1/">Subpage1</NavbarLink>
        <NavbarLink href="#">Future</NavbarLink>
        <NavbarLink href="#">Contents</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}