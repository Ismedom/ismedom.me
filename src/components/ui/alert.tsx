import { X } from 'lucide-react';
import { useState } from 'react';

export default function MobileAlert({ onClose }: {
    onClose: () => void
}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
        localStorage.setItem('hasSeenMobileAlert', 'true');
    };

    const handleFadeOut = () => {
        document.querySelector('.mobile-alert')?.classList.add('animate-fade-out');
        setTimeout(() => {
            handleClose();
        }, 300);
    };
    if (!isVisible) return null;

    return (
        <div className="fixed z-[1010] inset-0 px-10 bg-black/40 flex justify-center items-center rounded-md">
            <div
                className={`animate-fade-in mobile-alert max-w-[400px]`}
                onAnimationEnd={(e) => {
                    if (e.animationName === 'fadeOut') setIsVisible(false);
                }}
            >
                <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-transparent" />
                    <div className="relative p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="text-gray-200 font-medium text-lg">
                                    Mobile Device Detected
                                </div>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    You're on a mobile device. Some animations, high-resolution visuals, and interactive effects may be disabled for better performance.
                                </p>
                            </div>
                            <button
                                onClick={handleFadeOut}
                                className="text-gray-400 hover:text-gray-200 transition-colors ml-4"
                                aria-label="Close alert"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleFadeOut}
                                className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors text-sm flex-1"
                            >
                                I'll Stay Here
                            </button>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-900 opacity-30" />
                </div>
            </div>
        </div>
    );
}