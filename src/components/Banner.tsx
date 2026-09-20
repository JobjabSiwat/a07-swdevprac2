import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
                src="/img/banner.jpg"
                alt="Venue Banner"
                fill
                priority
                className={styles.bannerImage}
            />
            <div className={styles.bannerContent}>
                <h1 className={styles.title}>where every event finds its venue</h1>
                <p className={styles.subtitle}>
                    Discover and book the ideal space for weddings, corporate conferences, and private celebrations.
                </p>
            </div>
        </div>
    );
}