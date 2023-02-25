import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row items-center" data-theme="dark">
            <div className="w-2/3 flex justify-center">

                <div className="my-12 flex flex-col items-right gap-8">
                    <h1 className="font-mulish text-6xl sm:text-8xl font-black tracking-tight leading-none text-primary-content">
                        Hey,<br /><span className='text-primary'> I'm Bart</span>
                    </h1>
                    <p className='-mt-10 text-neutral-content text-xs'>Yeah, like in Bart Simpson</p>
                    <p className="text-md font-space max-w-lg text-left text-primary-content tracking-wide">
                        {/* I'm a techie with experience in software development and system administration. I enjoy learning new technologies and solving challenging problems. */}
                        I'm a tech entrepreneur and advisor with 12+ years of experience in the industry. <br />
                        I've led successful incubation programs and advised startups from a variety of different fields and industries
                        leading to funding valued at over 50M EUR. <br />Currently <span className="tooltip" data-tip="Spheric Capital"><Link href="https://spheric.capital" className='link link-secondary'>building an accelerator</Link></span> for smart energy and emerging technologies.<br /><br />
                        After hours I'm <span className="tooltip" data-tip="SpareMind"><Link href="https://sparemind.xyz" className='link link-secondary'>an indie maker</Link></span> building AI-based web products.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://www.linkedin.com/in/your-linkedin-url" className="text-neutral-content hover:text-secondary-focus" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </Link>
                        <Link href="https://twitter.com/your-twitter-handle" className="text-neutral-content hover:text-secondary-focus" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </Link>
                        <Link href="https://github.com/your-github-username" className="text-neutral-content hover:text-secondary-focus" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center p-10 gap-8">
                {/* <button className="btn btn-outline max-w-sm btn-primary">Button</button>
                <button className="btn btn-outline max-w-sm btn-primary">Button</button> */}
            </div>
        </div >
    );
};

export default Index;