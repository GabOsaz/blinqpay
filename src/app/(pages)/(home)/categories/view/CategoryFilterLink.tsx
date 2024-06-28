"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Props {
    children: React.ReactNode,
    href: string
}

export default function CategoryFilterLink({ children, href }: Props) {
    const searchParams = useSearchParams()
    const category = searchParams.get("category") ?? "All"

    return (
        <Link
            href={href}
            className={`${category === children ? "underline text-green-500" : ""}`}
        >
            {children}
        </Link>
    )
}