import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogs } from '@utils/homeData'

const Blogs = () => {
    return (
        <section className='blogsWrap'>
            <div className="container">
                <div className="blogsHead" data-aos="fade-up">
                    <h2>News & Updates</h2>
                </div>
                <div className="blogsBody">
                    {blogs.map((blog, index) => (
                        <div key={blog.id} className="blogItem" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="blogImg">
                                <Image
                                    src={blog.image}
                                    width={410} height={258}
                                    alt="blog"
                                />
                            </div>
                            <span>{blog.date}</span>
                            <h5>{blog.title}</h5>
                            <p>{blog.description}</p>
                            <Link href={blog.link} scroll={false}>
                                Learn More
                                <Image src="/images/home/arrow-right.png" alt="Download" width={18} height={10} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs