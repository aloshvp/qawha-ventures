import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogs } from '@utils/homeData'

const Blogs = () => {
    return (
        <section className='blogsWrap'>
            <div className="container">
                <div className="blogsHead">
                    <span>Updates & Insights</span>
                    <h2>BLOGS</h2>
                </div>
                <div className="blogsBody">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blogItem">
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
                            <Link href={blog.link} scroll={false}>Learn More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs