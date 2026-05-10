"use client";

import { useState } from "react";
import "./FAQ.css"

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What ingredients do you use in your products?",
            answer:
                "We use clean, skin-friendly ingredients enriched with vitamins, botanical extracts, and hydrating formulas suitable for all skin types.",
        },

        {
            question: "How can I track my order?",
            answer:
                "Once your order ships, you’ll receive an email with a tracking number and shipping updates.",
        },

        {
            question: "What is your return policy?",
            answer:
                "You can return unopened products within 14 days of delivery for a full refund.",
        },

        {
            question: "Do you offer international shipping?",
            answer:
                "Yes, we ship worldwide with different delivery options available at checkout.",
        },

        {
            question: "Are your products cruelty-free?",
            answer:
                "Absolutely. All our products are cruelty-free and never tested on animals.",
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="FAQ">

            <div className="container">

                <div className="questions">

                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>

                            <div
                                className="question"
                                onClick={() => handleToggle(index)}
                            >

                                <h4>{item.question}</h4>

                                <span
                                    className={
                                        openIndex === index ? "arrow active" : "arrow"
                                    }
                                >
                                    →
                                </span>

                            </div>

                            <div
                                className={
                                    openIndex === index
                                        ? "answer active"
                                        : "answer"
                                }
                            >
                                <p>{item.answer}</p>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="subscribe-card">

                    <div className="image">
                        <img
                            src="/subscripe.webp"
                            alt=""
                        />
                    </div>

                    <div className="content">
                        <h3>
                            STAY UPDATED ON <br />
                            NEW ARRIVALS, <br />
                            EXCLUSIVE OFFERS, <br />
                            AND BEAUTY TIPS!
                        </h3>

                        <button>SUBSCRIBE →</button>
                    </div>

                </div>

            </div>

        </section>
    );
}