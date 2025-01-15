import React from 'react'
import Heading from '../../../Component/commoncomponent/heading/Heading';
import arrivalbanner1 from '../../../assets/arrival1.png';
import arrivalbanner2 from '../../../assets/arrival2.png';
import arrivalbanner3 from '../../../assets/arrival3.png';
import arrivalbanner4 from '../../../assets/arrival4.png';

const Newarrival = () => {
  return (
    <div className='container'>
      <div>
          <Heading title={"Featured"} description={"New Arrival"}/>
          <div className='flex items-center my-[60px] gap-x-[30px]'>
            <div className='w-[575px] h-[600px] bg-text_000000 px-[30px] pt-[86px]'>
             <div className='w-[511px] h-[511px]'>
                <img className='w-full h-full object-cover' src={arrivalbanner1} alt={arrivalbanner1} />
             </div>
            </div>
             <div className='w-[50%] flex flex-col gap-y-[32px]'>
                <div className='w-[570px] h-[284px] bg-text_000000 flex items-end justify-end'>
                    <div className='w-[432px] h-[284px]'>
                        <img className='w-full h-full object-cover' src={arrivalbanner2} alt={arrivalbanner2} />
                    </div>
                </div>
                <div className='flex items-center gap-x-[30px]'>
                    <div className='w-[270px] h-[284px] bg-text_000000 flex items-center justify-center'>
                        <div className='w-[190px] h-[221px]'>
                          <img className='w-full h-full object-cover' src={arrivalbanner3} alt={arrivalbanner3} />
                        </div>
                    </div>
                    <div className='w-[270px] h-[284px] bg-text_000000 flex items-center justify-center'>
                        <div className='w-[201px] h-[203px]'>
                            <img className='w-full h-full object-cover' src={arrivalbanner4} alt={arrivalbanner4} />
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Newarrival
