// import React from 'react'

const ImgLoading = () => {
    return (
        <div>
            <div className="w-14 h-14 relative bg-slate-800 overflow-hidden rounded-lg">
                <div className="absolute left-0 bottom-0 w-10 h-10 rotate-45 translate-x-[30%] translate-y-[40%] bg-[#ff9371] shadow-[32px_-34px_0_5px_#ff3d00] animate-slide"></div>
                <div className="absolute left-2.5 top-2.5 w-4 h-4 rounded-full bg-[#ff3d00] animate-pulse origin-[35px_145px]"></div>
            </div>
        </div>
    )
}

export default ImgLoading
