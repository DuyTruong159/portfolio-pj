import ItemUIUX1 from '../assets/item-uiux-1.jpg';
import ItemUIUX2 from '../assets/item-uiux-2.jpg';
import ItemUIUX3 from '../assets/item-uiux-3.jpg';
import ItemUIUX4 from '../assets/item-uiux-4.jpg';
import ItemUIUX5 from '../assets/item-uiux-5.jpg';
import ItemUIUX6 from '../assets/item-uiux-6.jpg';
import ItemUIUX7 from '../assets/item-uiux-7.jpg';
import ItemUIUX8 from '../assets/item-uiux-8.jpg';
import ItemUIUX9 from '../assets/item-uiux-9.jpg';

import ItemBranding1 from '../assets/item-branding-1.jpg';
import ItemBranding2 from '../assets/item-branding-2.jpg';
import ItemBranding3 from '../assets/item-branding-3.jpg';
import ItemBranding4 from '../assets/item-branding-4.jpg';
import ItemBranding5 from '../assets/item-branding-5.jpg';
import ItemBranding6 from '../assets/item-branding-6.jpg';
import ItemBranding7 from '../assets/item-branding-7.jpg';
import ItemBranding8 from '../assets/item-branding-8.jpg';

import ItemSocialPost1 from '../assets/item-socialpost-1.jpg';
import ItemSocialPost2 from '../assets/item-socialpost-2.jpg';
import ItemSocialPost3 from '../assets/item-socialpost-3.jpg';
import ItemSocialPost4 from '../assets/item-socialpost-4.jpg';
import ItemSocialPost5 from '../assets/item-socialpost-5.jpg';
import ItemSocialPost6 from '../assets/item-socialpost-6.jpg';
import ItemSocialPost7 from '../assets/item-socialpost-7.jpg';
import ItemSocialPost8 from '../assets/item-socialpost-8.jpg';
import ItemSocialPost9 from '../assets/item-socialpost-9.jpg';

import ItemPhotography1 from '../assets/item-photography-1.jpg';
import ItemPhotography2 from '../assets/item-photography-2.jpg';
import ItemPhotography3 from '../assets/item-photography-3.jpg';
import ItemPhotography4 from '../assets/item-photography-4.jpg';

function Carousel(props) {

    const itemCarousel = [
        [
            [ItemUIUX1, 'staarlabs', 'E-Commerce website'],
            [ItemUIUX2, 'Ươm app', 'Ứng dụng hộ trợ chăm sóc cây trồng'],
            [ItemUIUX3, 'Bandy Constructor', 'Business Website'],
            [ItemUIUX4, 'Pomodoro app', 'Ứng dụng quản lý thời gian'],
            [ItemUIUX5, 'luật thắng lợi', 'Business Website'],
            [ItemUIUX6, 'Dragonship App', 'Ứng dụng vận chuyển cho doanh nghiệp'],
            [ItemUIUX7, 'Affiliate Tool', 'Công cụ quản lý đơn hàng Affiliate'],
            [ItemUIUX8, 'all landing pages', 'Business Website'],
            [ItemUIUX9, 'Meditation App', 'Ứng dụng chữa lành tâm hồn']
        ], [
            [ItemBranding1, 'INHERE', 'branding identity'],
            [ItemBranding2, 'aPao', 'branding identity'],
            [ItemBranding3, 'Vchosi', 'branding identity'],
            [ItemBranding4, 'Mơ Bistro', 'branding identity'],
            [ItemBranding5, '20Q Reminder', 'branding identity'],
            [ItemBranding6, 'Nghĩa Ân - Bò Khô', 'branding identity'],
            [ItemBranding7, 'Clara - Vải lụa tơ sen', 'branding identity'],
            [ItemBranding8, 'Sblazer', 'branding identity']
        ], [
            [ItemSocialPost1, 'Coffee Day', 'Social image'],
            [ItemSocialPost2, 'Chuyện ngày xuân', 'Social image'],
            [ItemSocialPost3, 'lotus Fabric', 'Social image'],
            [ItemSocialPost4, 'Skin Detective app', 'Social image'],
            [ItemSocialPost5, 'GetGo App', 'Social image'],
            [ItemSocialPost6, 'CocoNala', 'Social image'],
            [ItemSocialPost7, 'Combo Smokio cassper', 'Social image'],
            [ItemSocialPost8, 'Combo Saffron', 'Social image'],
            [ItemSocialPost9, 'Vnfs', 'Social image']
        ], [
            [ItemPhotography1, 'tạp chí môi trường', 'Photography'],
            [ItemPhotography2, 'tạp chí môi trường', 'Photography'],
            [ItemPhotography3, 'Trà hoa việt - Hương sen', 'Photography'],
            [ItemPhotography4, 'INHERE - SAFFRON', 'Photography']
        ]
    ];

    return(
        <>
            {itemCarousel[props.item].map((x, index) => (
                <div key={index} className='group flex flex-col gap-6 flex-[0_0_90%] snap-center snap-always lg:flex-[0_0_20%]'>
                    <img className='w-full transition-all duration-500 group-hover:rounded-[32px]' src={x[0]} />
                    <div className='relative h-32 lg:h-52'>
                        <div className='absolute flex flex-col gap-3'>
                            <div className='flex flex-col text-white/80'>
                                <p className='uppercase text-2xl font-bold lg:text-3xl'>{x[1]}</p>
                                <p className='text-base font-normal lg:text-xl'>{x[2]}</p>
                            </div>
                            <div className='h-[28px]'>
                                <div className='flex gap-2 items-center text-[#F6AA50] text-base font-medium overflow-hidden h-0 group-hover:h-full transition-all duration-500 lg:text-lg'>
                                    Xem trên Behance
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333" stroke="#F6AA50" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Carousel