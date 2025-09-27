import React from "react"


const Congrats = ({ setShowCongrats, prepareCards }) => {


    return (
        <div className="fixed inset-0 bg-[#222831] backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => {
            setShowCongrats(false); setTimeout(() => {
                prepareCards()
            }, 1000);
        }} >
            <div className="bg-[#27a070]/95 rounded-3xl p-6 xs:p-8 w-full max-w-sm xs:max-w-md sm:max-w-lg shadow-2xl text-center border-1 border-amber-400 mx-4"
                onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 xs:mb-6">
                    🎉 Tebrikler! 🎉
                </h2>
                <button onClick={() => {
                    setShowCongrats(false)
                    setTimeout(() => {
                        prepareCards()
                    }, 1000);
                }}
                    className="bg-[#1ebba6] hover:scale-105 active:scale-95 transition-all duration-300 text-white px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 rounded-xl font-semibold shadow-md text-sm xs:text-base sm:text-lg"
                >Yeniden Başlat
                </button>
            </div>
        </div>
    )
}

export default Congrats;