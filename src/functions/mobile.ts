
import MobileDetect from 'mobile-detect';

function isMobile() {
    const md = new MobileDetect(window.navigator.userAgent);
    return md.mobile();
}


export { isMobile };

