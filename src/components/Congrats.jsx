import React from "react"


const Congrats = ({setShowCongrats}) => {
    

    return (
        <div className="fixed inset-0 bg-[#222831] backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={()=>setShowCongrats(false)} >
            <div className="bg-[#222831]/95 rounded-3xl p-6 xs:p-8 w-full max-w-sm xs:max-w-md sm:max-w-lg shadow-2xl text-center border-2 border-amber-300 mx-4"
                onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 xs:mb-6">
                    🎉 Tebrikler! 🎉
                </h2>
                <button onClick={()=>setShowCongrats(false)}
                    className="bg-[#00ADB5] hover:from-[#00ADB5] hover:to-[#00ADB5] hover:scale-105 active:scale-95 transition-all duration-300 text-white px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 rounded-xl font-semibold shadow-md text-sm xs:text-base sm:text-lg"
                >Tamam
                </button>
            </div>
        </div>
    )
}

export default Congrats;