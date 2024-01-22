import { useEffect, useState } from 'react';

import Becky from './assets/becky.png';
import UiUx from './assets/bg-uiux.png';
import Branding from './assets/bg-branding.png';
import Socialpost from './assets/bg-socialpost.png';
import Photography from './assets/bg-photography.png';
import Film from './assets/bg-film.png';

import SectionItems from './SectionItems';

function Body() {

    const section = ['1' ,'2', '3'];
    const titles = ["UI/UX", "Branding", "Social post", "Photography", "Film/Video"];
    const listTitle = {
        0: [UiUx, '-5%', 'UI- UX'],
        1: [Branding, '-30%', 'Branding'],
        2: [Socialpost, '-50%', 'Social Post'],
        3: [Photography, '-70%', 'Photography'],
        4: [Film, '-90%', 'Film/VIdeo']
    };
    
    const [menu, setMenu] = useState(false);
    const [changeSection, setChangeSection] = useState(1);
    const [currentSection, setCurrentSection] = useState(1);
    const [scrollDirection, setScrollDirection] = useState('');
    const [backgroundImage, setBackGroundImage] = useState(UiUx);
    const [item, setItem] = useState(0);
    const [clickItem, setClickItem] = useState(0);
    
    const ScrollTitles = (e) => {
        if (e.deltaY < 0) {
            if(scrollDirection !== 'up') {
                setScrollDirection('up');
                if(item > 0) {
                    setItem(item - 1);
                }
            }
        }
        if (e.deltaY > 0) {
            if(scrollDirection !== 'down') {
                setScrollDirection('down');
                if(item < 4) {
                    setItem(item + 1);
                }
            }
        }
    }

    useEffect(() => {

        const main = document.querySelector('#main');
        const scrollItems = document.querySelector('#scrollItems');

        if(currentSection > changeSection) {
            document.querySelector(`#section${changeSection}`).style.display = 'flex';
            main.scrollBy(window.innerWidth, 0);
            main.scrollBy({
                left: -window.innerWidth,
                behavior: "smooth"
            });
        } else {
            document.querySelector(`#section${changeSection}`).style.display = 'flex';
            main.scrollBy({
                left: window.innerWidth,
                behavior: "smooth"
            });
        }
        setCurrentSection(changeSection);
        setTimeout(() => {
            section.filter(s => !s.includes(changeSection)).map(e => document.querySelector(`#section${e}`).style.display = 'none');
        }, 800);

        scrollItems.style.transform = `translateY(${listTitle[item][1]})`;
        setBackGroundImage(listTitle[item][0]);
        setTimeout(() => {setScrollDirection()}, 1500);
        
    }, [changeSection, item, backgroundImage, clickItem]);

    return(
        <>
            {/* Header */}
            <div className='cursor-default fixed flex justify-between items-center w-full px-24 py-8 z-10'>
                <div onClick={() => setChangeSection(1)} className="font-['Poppins'] font-bold text-3xl text-white cursor-pointer">
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
                    <div onClick={() => setMenu(!menu)}>
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

            <div className='h-screen flex overflow-y-hidden' id='main'>

                {/* Section 1 */}
                <div className='flex flex-[0_0_100vw] justify-center items-center px-36 relative' id='section1'>
                    <div className="flex flex-col items-center relative">
                        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="1618" height="390" viewBox="0 0 1618 390" fill="none">
                            <path d="M227.695 160.65C227.695 185.96 222.388 208.258 211.774 227.542C201.161 246.827 185.723 261.893 165.46 272.74C145.439 283.347 121.559 288.65 93.8187 288.65H3V33.3729H93.8187C121.559 33.3729 145.439 38.6761 165.46 49.2825C185.723 59.6478 201.161 74.4727 211.774 93.7571C222.388 112.8 227.695 135.098 227.695 160.65ZM89.4767 243.09C116.976 243.09 138.203 235.859 153.158 221.395C168.355 206.932 175.953 186.684 175.953 160.65C175.953 134.375 168.355 114.006 153.158 99.5424C138.203 85.0791 116.976 77.8475 89.4767 77.8475H54.0177V243.09H89.4767Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M454.402 180.898C454.402 185.96 453.799 191.746 452.593 198.254H305.691C306.415 216.092 311.239 229.23 320.164 237.667C329.089 246.104 340.185 250.322 353.452 250.322C365.272 250.322 375.041 247.429 382.76 241.644C390.721 235.859 395.786 228.024 397.957 218.141H451.869C449.216 232.122 443.547 244.657 434.864 255.746C426.18 266.834 414.963 275.512 401.214 281.78C387.705 288.047 372.629 291.181 355.985 291.181C336.446 291.181 319.079 287.083 303.882 278.887C288.685 270.45 276.866 258.518 268.423 243.09C259.98 227.663 255.759 209.463 255.759 188.492C255.759 167.52 259.98 149.32 268.423 133.893C276.866 118.224 288.685 106.292 303.882 98.096C319.079 89.9002 336.446 85.8022 355.985 85.8022C375.765 85.8022 393.012 89.9002 407.726 98.096C422.682 106.292 434.14 117.621 442.1 132.085C450.301 146.307 454.402 162.578 454.402 180.898ZM403.023 175.836C403.746 159.444 399.404 147.03 389.997 138.593C380.831 130.156 369.493 125.938 355.985 125.938C342.236 125.938 330.657 130.156 321.25 138.593C311.842 147.03 306.656 159.444 305.691 175.836H403.023Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M559.728 85.8022C584.091 85.8022 603.63 91.9491 618.344 104.243C633.058 116.537 642.224 132.928 645.843 153.418H598.082C596.152 143.776 591.81 136.062 585.056 130.277C578.302 124.492 569.497 121.599 558.642 121.599C549.958 121.599 543.204 123.648 538.38 127.746C533.556 131.844 531.143 137.388 531.143 144.379C531.143 149.923 533.073 154.382 536.933 157.757C540.792 161.132 545.617 163.783 551.406 165.712C557.195 167.64 565.517 169.93 576.372 172.582C591.569 175.957 603.871 179.573 613.278 183.429C622.927 187.045 631.128 192.951 637.883 201.147C644.878 209.102 648.376 219.949 648.376 233.689C648.376 250.804 641.621 264.665 628.113 275.271C614.846 285.878 596.875 291.181 574.201 291.181C548.149 291.181 527.284 285.395 511.605 273.825C495.926 262.013 486.397 245.26 483.02 223.565H531.867C533.073 233.448 537.415 241.282 544.893 247.068C552.371 252.612 562.14 255.384 574.201 255.384C582.885 255.384 589.518 253.335 594.101 249.237C598.685 244.898 600.976 239.354 600.976 232.605C600.976 226.819 598.926 222.119 594.825 218.503C590.966 214.887 586.021 212.115 579.99 210.186C574.201 208.258 565.879 205.968 555.024 203.316C540.069 199.942 527.887 196.567 518.48 193.192C509.313 189.576 501.353 183.911 494.599 176.198C488.086 168.484 484.83 157.878 484.83 144.379C484.83 127.023 491.463 112.921 504.73 102.073C517.997 91.226 536.33 85.8022 559.728 85.8022Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M680.584 30.8418C680.584 22.6459 683.478 16.0169 689.268 10.9548C695.057 5.6516 702.655 3 712.063 3C721.47 3 729.069 5.6516 734.858 10.9548C740.647 16.0169 743.542 22.6459 743.542 30.8418C743.542 38.7966 740.647 45.4256 734.858 50.7288C729.069 55.791 721.47 58.322 712.063 58.322C702.655 58.322 695.057 55.791 689.268 50.7288C683.478 45.4256 680.584 38.7966 680.584 30.8418ZM737.391 88.3333V288.65H686.373V88.3333H737.391Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M862.06 85.8022C878.945 85.8022 893.418 89.7797 905.479 97.7345C917.54 105.689 926.103 116.416 931.169 129.915V88.3333H981.825V289.373C981.825 307.934 978.086 324.567 970.608 339.271C963.372 354.217 952.396 365.908 937.682 374.345C923.209 382.782 905.6 387 884.855 387C855.909 387 832.511 380.13 814.661 366.39C796.81 352.65 785.956 333.968 782.096 310.345H832.39C835.285 320.469 840.833 328.303 849.034 333.847C857.477 339.633 868.211 342.525 881.237 342.525C896.192 342.525 908.253 338.066 917.42 329.147C926.586 320.469 931.169 307.211 931.169 289.373V246.706C926.103 260.205 917.54 271.053 905.479 279.249C893.418 287.203 878.945 291.181 862.06 291.181C845.175 291.181 829.978 287.083 816.47 278.887C802.962 270.691 792.348 258.879 784.629 243.452C777.151 227.783 773.412 209.463 773.412 188.492C773.412 167.52 777.151 149.32 784.629 133.893C792.348 118.224 802.962 106.292 816.47 98.096C829.978 89.9002 845.175 85.8022 862.06 85.8022ZM877.98 130.277C862.06 130.277 849.275 135.46 839.627 145.825C829.978 156.19 825.154 170.412 825.154 188.492C825.154 206.571 829.978 220.793 839.627 231.158C849.275 241.282 862.06 246.345 877.98 246.345C893.418 246.345 906.082 241.162 915.972 230.797C926.103 220.19 931.169 206.089 931.169 188.492C931.169 170.653 926.103 156.552 915.972 146.186C906.082 135.58 893.418 130.277 877.98 130.277Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M1147.46 85.4407C1170.62 85.4407 1189.07 93.0339 1202.82 108.22C1216.57 123.407 1223.45 144.74 1223.45 172.22V288.65H1172.79V178.006C1172.79 162.096 1168.69 149.802 1160.49 141.124C1152.29 132.205 1141.07 127.746 1126.84 127.746C1112.37 127.746 1100.79 132.446 1092.1 141.847C1083.42 151.249 1079.08 164.748 1079.08 182.345V288.65H1028.06V88.3333H1079.08V128.469C1084.38 114.97 1093.07 104.484 1105.13 97.0113C1117.43 89.2975 1131.54 85.4407 1147.46 85.4407Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M1456.85 180.898C1456.85 185.96 1456.24 191.746 1455.04 198.254H1308.14C1308.86 216.092 1313.68 229.23 1322.61 237.667C1331.53 246.104 1342.63 250.322 1355.9 250.322C1367.72 250.322 1377.49 247.429 1385.21 241.644C1393.17 235.859 1398.23 228.024 1400.4 218.141H1454.31C1451.66 232.122 1445.99 244.657 1437.31 255.746C1428.63 266.834 1417.41 275.512 1403.66 281.78C1390.15 288.047 1375.07 291.181 1358.43 291.181C1338.89 291.181 1321.52 287.083 1306.33 278.887C1291.13 270.45 1279.31 258.518 1270.87 243.09C1262.43 227.663 1258.2 209.463 1258.2 188.492C1258.2 167.52 1262.43 149.32 1270.87 133.893C1279.31 118.224 1291.13 106.292 1306.33 98.096C1321.52 89.9002 1338.89 85.8022 1358.43 85.8022C1378.21 85.8022 1395.46 89.9002 1410.17 98.096C1425.13 106.292 1436.59 117.621 1444.55 132.085C1452.75 146.307 1456.85 162.578 1456.85 180.898ZM1405.47 175.836C1406.19 159.444 1401.85 147.03 1392.44 138.593C1383.28 130.156 1371.94 125.938 1358.43 125.938C1344.68 125.938 1333.1 130.156 1323.7 138.593C1314.29 147.03 1309.1 159.444 1308.14 175.836H1405.47Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M1544.08 126.661C1551.56 113.885 1561.45 103.881 1573.75 96.6497C1586.05 89.177 1599.8 85.4407 1615 85.4407V140.04H1600.17C1562.78 140.04 1544.08 157.395 1544.08 192.107V288.65H1493.06V88.3333H1544.08V126.661Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                        </svg>
                        <svg className="w-1/6 absolute -bottom-1/4 right-[10%]" xmlns="http://www.w3.org/2000/svg" width="118" height="110" viewBox="0 0 118 110" fill="none">
                            <path d="M96.5998 17.0335L72.6114 31.4265L73.044 5.04098L73.0856 2.5H70.5443H46.7468H44.2263L44.2469 5.02049L44.4635 31.4487L20.4381 17.0335L18.2711 15.7332L16.9944 17.9143L4.84246 38.6738L3.54573 40.889L5.79443 42.1268L29.3772 55.1081L5.80994 67.8647L3.53653 69.0953L4.84246 71.3262L16.9944 92.0857L18.2711 94.2668L20.4381 92.9665L44.4635 78.5513L44.2469 104.98L44.2263 107.5H46.7468H70.5443H73.086L73.044 104.959L72.6114 78.7916L96.6142 92.9751L98.756 94.2407L100.032 92.1052L112.437 71.3457L113.775 69.1065L111.481 67.8647L87.914 55.1081L111.497 42.1268L113.766 40.8778L112.437 38.6543L100.032 17.8948L98.7474 15.7449L96.5998 17.0335Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                        </svg>
                    </div>
                    <img className='h-full absolute bottom-0' src={Becky} alt='Becky'/>
                    <div className='absolute w-full px-24 py-12 bottom-0 flex justify-between items-end text-white'>
                        <div className='w-[630px] flex flex-col gap-8'>
                            <p className='text-8xl font-semibold'>Xin chào, mình là Trường</p>
                            <div className='flex flex-wrap gap-5'>
                                <Title props={["UI/UX", "Social post", "Visual design", "branding identity", "product photography"]} />
                            </div>
                        </div>
                        <div className='w-[500px] flex flex-col items-end gap-12 text-lg font-semibold'>
                            <p>Là một người sáng tạo đa nhiệm, trên con đường trở thành UI/UX Designer và 2D Graphics Designer thực thụ, đem đến cho dự án của mình sự độc đáo và chất lượng. Mình không chỉ đơn thuần là người thiết kế, mà còn là người nhiệt huyết, luôn tìm kiếm cơ hội để làm mới bản thân trong ngành.</p>
                            <a className='group cursor-pointer capitalize font-normal py-4 px-6 border-2 border-solid border-transparent rounded-[50px] bg-gradient-to-r from-[#F6AA50] to-[#FFFFFF] bg-origin-border shadow-[inset_0_100vw_#082723] transition-all duration-500
                                hover:to-[#F6AA50] hover:shadow-[#F6AA50] hover:font-bold'
                                onClick={() => setChangeSection(2)}>
                                Các dự án của mình ở đây!
                                <span className='relative inline-block h-0.5 w-6 bg-white rounded-full ml-2 bottom-1 transition-all duration-500 group-hover:w-7
                                    before:content-[""] before:absolute before:bg-white before:rounded-full before:h-0.5 before:w-3 before:-rotate-45 before:-right-px before:-bottom-1
                                    after:content-[""] after:absolute after:bg-white after:rounded-full after:h-0.5 after:w-3 after:rotate-45 after:-right-px after:bottom-1'></span>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Section 2 */}
                <div className='flex-[0_0_100vw] items-center px-24 py-36 text-white bg-cover transition-all duration-500 hidden' style={{backgroundImage: `url(${backgroundImage})`}} id='section2'>
                    <div className='w-full h-full overflow-hidden' onWheel={ScrollTitles}>
                        <div className='flex flex-col items-start gap-28 relative top-1/2 -translate-y-[5%] transition duration-500' id='scrollItems'>
                        {titles.map((x, index) => ( 
                            <div key={index} className={`w-full ${item != index && 'opacity-60'}`}>
                                <div className='group/item w-fit pb-8 border-b-2 border-solid flex gap-11 items-center'>
                                    <div className='flex items-baseline gap-20'>
                                        <span className='text-3xl font-normal'>{index + 1}.</span>
                                        <div className='capitalize text-7xl font-medium'>{x}</div>
                                    </div>
                                    <div className={`overflow-hidden w-0 ${item == index && 'group-hover/item:w-[280px]'} transition-all duration-500 cursor-pointer`}>
                                        <div className='group w-[280px] bg-[#F6AB52] flex gap-3.5 items-baseline rounded-[50px] py-4 px-6 text-lg font-bold capitalize' id={index} onClick={() => {setClickItem(index); setChangeSection(3)}}>
                                            <span>Xem tất cả các dự án</span>
                                            <span className='relative inline-block h-0.5 w-6 bg-white rounded-full ml-2 bottom-1 transition-all duration-500 group-hover:w-7
                                                before:content-[""] before:absolute before:bg-white before:rounded-full before:h-0.5 before:w-3 before:-rotate-45 before:-right-px before:-bottom-1
                                                after:content-[""] after:absolute after:bg-white after:rounded-full after:h-0.5 after:w-3 after:rotate-45 after:-right-px after:bottom-1'></span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        ))}
                        </div>
                    </div>
                </div>
                
                {/* Section 3 */}
                <div className='flex-col gap-8 flex-[0_0_100vw] justify-center px-24 text-white bg-cover hidden' style={clickItem == 4 ? { backgroundImage: `url(${backgroundImage})` } : {}} id='section3'>
                    <SectionItems name={listTitle[clickItem][2]} back={(e) => {setChangeSection(e)}} item={clickItem}/>
                </div>       
            </div> 
        </>
    )
}

function Title({props}) {
    return(
        <>
            {props.map((x, index) => ( <a key={index} className='bg-[#F6AA50] rounded-[50px] text-lg font-semibold uppercase px-10 py-3.5'>{x}</a> ))}
        </>
    )
}

export default Body