"use client";
import { faqData } from "@utils/homeData";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faqWrap">
            <div className="container">
                <div className="faqBody">
                    {faqData?.map((item, index) => (
                        <div key={index} className="faqItem">
                            <div className="faqTitle">
                                <h2
                                    className={`${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.title}
                                    <span className="faqToggle">
                                        <Image
                                            src={activeIndex === index ? "/images/home/minus-circle.svg" : "/images/home/plus-circle.svg"}
                                            alt={activeIndex === index ? "Collapse" : "Expand"}
                                            width={38}
                                            height={38}
                                        />
                                    </span>
                                </h2>
                                {item?.subtitle &&
                                    <em> {item.subtitle}</em>
                                }
                            </div>
                            <div className={`faqContent ${activeIndex === index ? 'active' : ''}`}>
                                <p className="faqDesc">{item.description}</p>
                                <Link href={item.link} className="faqLink" scroll={false}>
                                    Learn More +
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq