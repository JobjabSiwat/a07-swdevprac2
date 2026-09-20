import Link from 'next/link';

interface TopMenuItemProps {
    title: string;
    pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
    return (
        <Link
            href={pageRef}
            style={{
                padding: "8px 20px",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#ffffff",
                backgroundColor: "#b8860b",
                borderRadius: "9999px",
                transition: "background-color 0.2s ease",
            }}
        >
            {title}
        </Link>
    );
}