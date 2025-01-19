"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarItem = ({title , param})=>{
    const genre = usePathname().split("/")[2];

    return<>
    <div>
        <Link href={`/top/${param}`} className={`hover:font-bold font-semibold ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-300 rounded-lg" : ""}`}>
        {title}
        </Link>
    </div>
    </>

}