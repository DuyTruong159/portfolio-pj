import { useState } from "react"

function Header() {

    const [menu, setMenu] = useState(false);

    const menuTonggle = () => {
        setMenu(!menu);
    }

    const home = () => {
        const scroll = document.querySelector('#main');
        scroll.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth"
        });
    }

    return (
        <>  <div className="cursor-default fixed flex justify-between items-center w-full px-24 py-8 z-10">
                <div onClick={home} className="font-['Poppins'] font-bold text-3xl text-white">
                    DuyTruong
                    <span className="text-[#F1875E]">.</span>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_16_84)">
                                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F0F0F0"/>
                                <path d="M3.30752 6.25891C2.05071 7.8941 1.10302 9.77879 0.551208 11.8262H8.87483L3.30752 6.25891Z" fill="#0052B4"/>
                                <path d="M31.4488 11.8262C30.897 9.77885 29.9492 7.89416 28.6925 6.25897L23.1253 11.8262H31.4488Z" fill="#0052B4"/>
                                <path d="M0.551208 20.174C1.10308 22.2214 2.05077 24.1061 3.30752 25.7412L8.87465 20.174H0.551208Z" fill="#0052B4"/>
                                <path d="M25.7411 3.30758C24.106 2.05077 22.2213 1.10308 20.1739 0.551208V8.87477L25.7411 3.30758Z" fill="#0052B4"/>
                                <path d="M6.25891 28.6924C7.8941 29.9492 9.77879 30.8969 11.8262 31.4488V23.1253L6.25891 28.6924Z" fill="#0052B4"/>
                                <path d="M11.8261 0.551208C9.77872 1.10308 7.89404 2.05077 6.25891 3.30752L11.8261 8.87471V0.551208Z" fill="#0052B4"/>
                                <path d="M20.174 31.4488C22.2213 30.8969 24.106 29.9492 25.7411 28.6925L20.174 23.1253V31.4488Z" fill="#0052B4"/>
                                <path d="M23.1253 20.174L28.6925 25.7413C29.9492 24.1061 30.897 22.2214 31.4488 20.174H23.1253Z" fill="#0052B4"/>
                                <path d="M31.8646 13.9131H18.0871H18.087V0.135438C17.4038 0.0465 16.7073 0 16 0C15.2926 0 14.5962 0.0465 13.9131 0.135438V13.9129V13.913H0.135438C0.0465 14.5962 0 15.2927 0 16C0 16.7074 0.0465 17.4038 0.135438 18.0869H13.9129H13.913V31.8646C14.5962 31.9535 15.2926 32 16 32C16.7073 32 17.4038 31.9536 18.0869 31.8646V18.0871V18.087H31.8646C31.9535 17.4038 32 16.7074 32 16C32 15.2927 31.9535 14.5962 31.8646 13.9131Z" fill="#D80027"/>
                                <path d="M20.174 20.174L27.3137 27.3138C27.6421 26.9855 27.9553 26.6423 28.2542 26.2866L22.1416 20.174H20.174V20.174Z" fill="#D80027"/>
                                <path d="M11.8261 20.174H11.826L4.68628 27.3137C5.01453 27.6421 5.35772 27.9553 5.71347 28.2542L11.8261 22.1414V20.174Z" fill="#D80027"/>
                                <path d="M11.826 11.8262V11.8261L4.68629 4.68628C4.35791 5.01453 4.04466 5.35772 3.74579 5.71347L9.85848 11.8262L11.826 11.8262Z" fill="#D80027"/>
                                <path d="M20.174 11.8262L27.3138 4.68629C26.9855 4.35791 26.6423 4.04466 26.2866 3.74585L20.174 9.85854V11.8262Z" fill="#D80027"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_84">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_16_101)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 0C24.8356 0 32 7.16444 32 16C32 24.8356 24.8356 32 16 32C7.16444 32 0 24.8356 0 16C0 7.16444 7.16444 0 16 0Z" fill="#DA251D"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.88892 14L13.2836 17.1929L11.6054 22.3591L16 19.1671L20.3947 22.36L18.7147 17.1938L23.1111 14H17.6605L16 8.88892L14.3396 14H8.88892Z" fill="#FFFF00"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_101">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div onClick={menuTonggle}>
                    {menu ? 
                        (
                            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <line y1="-2" x2="34.4031" y2="-2" transform="matrix(0.70501 0.709197 -0.70501 0.709197 5 3.60139)" stroke="white" strokeWidth="4"/>
                                    <path d="M6.74536 26.3986L30.9999 2" stroke="white" strokeWidth="4"/>
                                </g>
                            </svg>

                        ) : (
                            <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <line y1="2" x2="36" y2="2" stroke="white" strokeWidth="4"/>
                                    <line y1="13.55" x2="36" y2="13.55" stroke="white" strokeWidth="4"/>
                                    <path d="M0 25H36" stroke="white" strokeWidth="4"/>
                                </g>
                            </svg>

                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header