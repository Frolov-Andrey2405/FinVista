import React from 'react'
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section className={layout.sectionReverse} id='product'>
        <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing"  className='w-[100%] h-[100%] relative z-[5]'/>
        
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient' />
        
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient' />
        </div>
        
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-470px mt-5`}>
                With our bank, you are provided with an easy and convenient way to control your billing and invoicing process.
                We offer intuitive tools to effectively manage your finances, providing transparency and minimizing billing complexity.
                Your business deserves a reliable and innovative partner ready to provide a worry-free financial management experience
            </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="appleStore" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
            <img src={google} alt="googlePlay" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>

        </div>

        

    </section>
)

export default Billing