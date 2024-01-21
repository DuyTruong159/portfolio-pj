import Carousel from "./components/Carousel"

function SectionItems(props) {

    return(
        <>
            <div className='flex items-center gap-8'>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44" id="sad" viewBox="0 0 54 44" fill="none" 
                    onMouseEnter={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','#F6AA50')} 
                    onMouseLeave={(e) => e.currentTarget.querySelector('path').setAttribute('stroke','white')} 
                    onClick={() => props.back(2)}>
                    <path d="M23 41L3 22M3 22L23 3M3 22H51" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='capitalize text-7xl font-medium'>{props.name}</span>
            </div>
            <div className='flex gap-16 overflow-scroll'>
                <Carousel item={props.item}/>
            </div>
        </>
    )
}

export default SectionItems