import DateReserve from '@/components/DateReserve';
import Button from '@mui/material/Button';

export default function Booking() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-12 px-4 bg-gray-50">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Venue Reservation
                    </h1>
                    <p className="text-sm text-gray-500">
                        Reserve the ideal space for your upcoming event
                    </p>
                </div>

                <form className="w-full flex flex-col gap-6">
                    <DateReserve />
                    <Button
                        variant="contained"
                        name="Book Venue"
                        className="w-full mt-2"
                        sx={{
                            backgroundColor: '#b8860b',
                            '&:hover': { backgroundColor: '#966d09' },
                            borderRadius: '8px',
                            paddingY: '10px',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            textTransform: 'none',
                        }}
                    >
                        Book Venue
                    </Button>
                </form>
            </div>
        </main>
    );
}