import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <nav className="h-14 bg-white fixed top-0 left-0 right-0 z-30 border-b border-gray-200 flex flex-row items-center justify-between px-6 shadow-sm">
            <div className="flex items-center h-full">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={36}
                    height={36}
                    className="h-9 w-auto object-contain"
                />
            </div>
            <div className="flex flex-row items-center">
                <TopMenuItem title="Booking" pageRef="/booking" />
            </div>
        </nav>
    );
}