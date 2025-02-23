import { useEffect, useState } from 'react';
import NavBar from '../common/nav-bar';
import Footer from '../common/footer';
import { Boxes } from '../ui/background-boxes';
import { isMobile } from 'react-device-detect';
import { Outlet } from 'react-router-dom';
import MobileAlert from '../ui/alert';

const AppLayout = () => {
    const [showMobileAlert, setShowMobileAlert] = useState(false);

    useEffect(() => {
        const hasSeenAlert = localStorage.getItem('hasSeenMobileAlert');

        if (isMobile && !hasSeenAlert) {
            setShowMobileAlert(true);
            localStorage.setItem('hasSeenMobileAlert', 'true');
        }
    }, []);

    const handleAlertClose = () => {
        setShowMobileAlert(false);
    };

    return (
        <>
            {showMobileAlert && (
                <div className="fixed z-[1010] inset-0 px-10 animate-fade-in bg-black/80 flex justify-center items-center">
                    <MobileAlert onClose={handleAlertClose} />
                </div>
            )}

            <div className="min-h-screen relative w-full overflow-hidden bg-slate-900">
                <div className="fixed inset-0 w-full h-full bg-slate-900 z-20 pointer-events-none [mask-image:radial-gradient(circle_at_center,transparent_10%,white_95%)]" />

                {!isMobile && (
                    <div className="fixed inset-0">
                        <Boxes />
                    </div>
                )}

                <div className="fixed z-[100] top-1 md:top-3 left-1/2 -translate-x-1/2">
                    <NavBar />
                </div>

                <div className="max-w-[80%] mx-auto mt-[100px] text-gray-200 pb-10">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </>
    );
};

export default AppLayout;