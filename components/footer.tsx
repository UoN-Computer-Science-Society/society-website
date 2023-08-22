"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinkPlaceholder from './ui/link-placeholder';
import SocialMedia from './ui/social-media';
import { usePathname } from 'next/navigation';
import { ToasterProvider } from '@/providers/toast-provider';
import EmailSubscriptionForm from '@/app/contact-us/components/subscription-form';

const Footer = () => {
    const pathname = usePathname();
    return (
        <>
            {pathname != "/default" && (

                    <footer className="bg-[#4A4772] p-4 text-base text-[#E8E6E3]">

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                            <div className='flex flex-col gap-y-4 mt-3 md:basis-3/4'>

                                <div>
                                    <p className="mb-2">
                                        &copy; 2023 Computer Science Society, University of Nottingham Malaysia. All rights reserved.
                                    </p>
                                    <p>
                                        Website by <LinkPlaceholder url='' text='Leong Tin Jet' />, and contributors.
                                        This website is powered by <LinkPlaceholder url='' text='Next.js' /> and open-source in our <LinkPlaceholder url='' text='Github Repository' />.
                                        Feel free to submit a pull request, or raise an issue if there are any problems.
                                    </p>
                                </div>

                                <Link href="/">
                                    <div className="flex items-center justify-start">
                                        <Image
                                            src="/CSS_dark.png"
                                            alt="CSS logo"
                                            width={200}
                                            height={200}
                                            className="object-contain"
                                        />
                                    </div>
                                </Link>

                                <p>UNM’s Computer Science Society is part of the <LinkPlaceholder url='' text='Student’s Association at University of Nottingham Malaysia' /></p>
                            </div>

                            <div className='flex-col mt-3 md:basis-1/4'>

                                <h3 className='text-xl font-bold mb-3'>Useful links</h3>

                                <ul className='list-disc pl-5'>
                                    <li className='my-2'><LinkPlaceholder url='' text='Our Github' /></li>
                                    <li className='my-2'><LinkPlaceholder url='' text='Read our Constitution' /></li>
                                    <li className='my-2'><LinkPlaceholder url='' text='Discord' /></li>
                                    <li className='my-2'><LinkPlaceholder url='' text='UNM Student Association' /></li>
                                    <li className='my-2'><LinkPlaceholder url='' text='University of Nottingham Malaysia' /></li>
                                </ul>


                                <ToasterProvider />
                                <EmailSubscriptionForm />

                                <h3 className='text-xl font-bold my-3'>Talk with us</h3>
                                <div className="flex space-x-4 ">
                                    <SocialMedia />
                                </div>
                            </div>

                        </div>
                    </footer>

            )
            }
        </>
    );
};

export default Footer;
