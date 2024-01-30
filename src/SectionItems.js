import Carousel from "./components/Carousel"

function SectionItems(props) {

    return(
        <>
            <div className='flex items-center gap-8'>
                <svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none"
                    onMouseEnter={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','#F6AA50')} 
                    onMouseLeave={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','white')} 
                    onClick={() => props.back(2)}>
                    <path d="M9.42105 17L1 9M1 9L9.42105 1M1 9H21.2105" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="54" height="44" id="sad" viewBox="0 0 54 44" fill="none" 
                    onMouseEnter={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','#F6AA50')} 
                    onMouseLeave={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','white')} 
                    onClick={() => props.back(2)}>
                    <path d="M23 41L3 22M3 22L23 3M3 22H51" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='capitalize text-3xl font-medium lg:text-7xl'>{props.name}</span>
            </div>
            {props.item != 4 ? (
                <div className='flex gap-5 overflow-x-scroll lg:gap-16' id="scroll">
                    <Carousel item={props.item}/>
                </div>
            ) : (
                <div className="h-1/2 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <g clip-path="url(#clip0_312_5555)">
                            <rect width="80" height="80" rx="40" fill="#F6AA50"/>
                            <path d="M26.666 16.6665V63.3332L63.3327 39.9998L26.666 16.6665Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_312_5555">
                                <rect width="80" height="80" rx="40" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
            
        </>
    )
}

export default SectionItems