
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUsers } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
const Review = () => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (rating % 1 !== 0) {
      stars.push(
        <FaStarHalfAlt key={Math.ceil(rating)} className="text-yellow-400" />
      );
    }
    for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
    return stars;
  };



  return (
    <div className="mb-12 mt-8 md:mb-20">
      {/* <SectionTitle title={"Happy Students"} /> */}
      <h1 className="md:text-4xl font-bold text-center text-primary text-2xl pt-4 mb-6 md:mb-12">Happy Client's</h1>
      <Parallax bgImage="https://i.ibb.co/P6N63dK/1000-F-75927378-1s1lq-PIc6b-ATi8vh-El-AMP9g-Pi251-KM4-C.jpg"  strength={500}>
        <div  className= " md:relative ">
          <div className="absolute inset-0 opacity-30 bg-blue-900"></div>
          <div className="flex flex-col justify-center items-center relative z-10 h-full py-12">


            <VerticalTimeline>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(232, 121, 173)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid rgb(232, 121, 173)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}
              >
                <div className='flex gap-2 md:gap-5 items-center'>
                  <img src="https://i.ibb.co/vmbxs57/356-3562377-personal-user.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />
                  <span >
                    <p className=''>
                    Toyland is a treasure trove of joy for kids! We love the variety and quality of toys available.
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.3/5</span>  {renderStars(4.3)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(232, 121, 173)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid  rgb(232, 121, 173)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}
              >
                <div className='flex gap-5 items-center'>
                  <img src="https://i.ibb.co/Kwd67vS/user.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />
                  <span>
                    <p>
                    Toyland's toys spark creativity and keep my kids engaged for hours. A parent's dream!
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.2/5</span>  {renderStars(4.2)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(232, 121, 173)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid  rgb(232, 121, 173)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}
              >
                <div className='flex gap-5 items-center justify-center'>

                  <img src="https://i.ibb.co/m8sKXPW/user-m.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />


                  <span>
                    <p>
                    Toyland's website is user-friendly, making shopping for toys a breeze.
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.5/5</span>  {renderStars(4.5)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(232, 121, 173)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid  rgb(232, 121, 173)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}

              >
                <div className='flex gap-5 items-center'>
                  <img src="https://i.ibb.co/X5Zdcgp/man.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />
                  <span>
                    <p>
                    Thank you, Toyland, for making playtime memorable and meaningful.
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.6/5</span>  {renderStars(4.6)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>

            </VerticalTimeline>

          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Review;