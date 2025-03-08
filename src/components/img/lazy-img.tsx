import React, { useState, useEffect, useRef, ImgHTMLAttributes, ReactElement } from "react";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    loadImage: () => Promise<any>;
    alt: string;
    placeholder?: string;
    LoadingComponent?: ReactElement;
}

const LazyImage: React.FC<LazyImageProps> = ({
    loadImage,
    alt,
    placeholder,
    LoadingComponent,
    ...props
}) => {
    const [src, setSrc] = useState<string | null>(placeholder || null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setLoading(true);
                    loadImage()
                        .then((module) => {
                            setSrc(typeof module.default === 'string' ? module.default : module);
                            setLoading(false);
                        })
                        .catch(() => {
                            setError(true);
                            setLoading(false);
                        });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [loadImage]);

    return (
        <div ref={containerRef}>
            {loading && LoadingComponent ? LoadingComponent : null}
            {!loading && error ? (
                <div className="text-red-500">Failed to load image</div>
            ) : (
                !loading && src ? (
                    <img
                        className="w-14 object-contain p-2"
                        ref={imgRef} src={src} alt={alt} {...props} />
                ) : null
            )}
        </div>
    );
};

export default LazyImage;