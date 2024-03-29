"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CalendarDays, Home, Mail, Users } from 'lucide-react';
import { BlogType, EventType } from '@/types';
import getBlogs from '@/actions/getBlogs';
import getEvents from '@/actions/getEvent';
import ToggleComponent from './toggle-component';
import { consolas } from '@/app/layout';

export const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
    icons: <Home />,
    id: 0,
    isOpen: true,
  },
  {
    name: 'about.html',
    path: '/about-us',
    icon: 'html_icon.svg',
    icons: <Users />,
    id: 1,
    isOpen: true,
  },
  {
    name: 'contact.css',
    path: '/contact-us',
    icon: 'css_icon.svg',
    icons: <Mail />,
    id: 2,
    isOpen: true,
  },
  {
    name: 'events.js',
    path: '/events',
    icon: 'js_icon.svg',
    icons: <CalendarDays />,
    id: 3,
    isOpen: true,
  },
];


const Explorer = () => {

  const [blog, setBlog] = useState<BlogType[]>([]);
  const [event, setEvent] = useState<EventType[]>([]);
  const [yearRanges, setYearRanges] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlog(blogs);

      const uniqueYearRanges = Array.from(new Set(blogs.map((blog) => blog.year)));
      setYearRanges(uniqueYearRanges);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      const upcomingEvent = await getEvents();
      setEvent(upcomingEvent)
    }

    fetchEvent();
  }, []);

  return (
    <div className={`${consolas.className}  bg-[#363451] w-[250px] text-gray-300 title-bar-text text-base h-screen hidden md:block border-r-2 border-[#4A4772]`}>
      <p className="py-2 px-3 uppercase tracking-wider mb-3">Explorer</p>

      <ToggleComponent key={'main'} title={'UNM CSS'} id={"main"}>
        <div className="mb-4">
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className="px-4 flex items-center">
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p className='p-1 ml-2'>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <ToggleComponent key={'upcoming'} title='Upcoming Event' id={"upcoming"}>
          {event.map((item, index) => (
            <a href={`/events#${item.id}`} key={index}>
              <div className="ml-5 py-1 px-4 flex items-center">
                <Image
                  src={`js_icon.svg`}
                  alt={'upcoming event'}
                  height={18}
                  width={18}
                />{' '}
                <p className='p-1 ml-2 tracking-tight'>{item.title}</p>
              </div>
            </a>
          ))}

          {event.length === 0 &&
            <>
              <div className="ml-5 py-1 px-4 flex items-center">
                <p className='p-1 ml-2'>No upcoming event available</p>
              </div>
            </>}

        </ToggleComponent>


        <ToggleComponent title='Previous Event' id={"previous"}>
          {yearRanges.length === 0 &&
            <>
              <div className="ml-5 py-1 px-4 flex items-center">
                <p className='p-1 ml-2'>No previous event available</p>
              </div>
            </>}


          {yearRanges.map((yearRange, index) => (
            <div key={index} className='ml-5'>
              <ToggleComponent title={yearRange} id={yearRange + "#" + index}>
                <div>
                  {blog.filter((blog) => blog.year === yearRange).map((item, index) =>
                  (
                    <Link href={`/events#${item.id}`} key={index}>
                      <div className="ml-5 py-1 px-4 flex items-center">
                        <Image
                          src={`js_icon.svg`}
                          alt={'previous event'}
                          height={18}
                          width={18}
                        />{' '}
                        <p className='p-1 ml-2'>{item.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>

              </ToggleComponent>
            </div>
          ))}
        </ToggleComponent>


      </ToggleComponent>

    </div>
  );
};

export default Explorer;    