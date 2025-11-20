import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
    return (
        <Link href={href} className="group block relative overflow-hidden h-[500px] w-full">
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-3 tracking-wide">
                        {title}
                    </h3>
                    <p className="text-neutral-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {description}
                    </p>
                    <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                        Explore
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
