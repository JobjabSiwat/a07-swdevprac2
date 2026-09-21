import Image from 'next/image';

const venueMap = new Map([
    ['001', { name: 'The Bloom Pavilion', image: '/img/bloom.jpg' }],
    ['002', { name: 'Spark Space', image: '/img/sparkspace.jpg' }],
    ['003', { name: 'The Grand Table', image: '/img/grandtable.jpg' }],
]);

export default async function VenueDetailPage({
    params,
}: {
    params: Promise<{ vid: string }>;
}) {
    const { vid } = await params;
    const venue = venueMap.get(vid);

    if (!venue) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-50">
                <p>Venue not found</p>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-gray-800">{venue.name}</h1>
            <Image
                src={venue.image}
                alt={venue.name}
                width={800}
                height={500}
                priority
                className="rounded-lg object-cover"
            />
        </main>
    );
}