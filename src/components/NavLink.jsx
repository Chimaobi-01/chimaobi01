"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, useState } from "react";

const NavLink = forwardRef(
  function NavLink(
    { activeClassName, inactiveClassName, className, href, end, children, ...props },
    ref,
  ) {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
      setIsActive(
        end
          ? pathname === href.toString()
          : pathname.startsWith(href.toString()),
      );
    }, [end, href, pathname]);

    return (
      <Link
        className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
        href={href}
        ref={ref}
        {...props}
        onClick={props.onClick}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
