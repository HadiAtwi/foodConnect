// pages/FAQ.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './FAQ.css';

const faqs = [
    {
        question: "How can I register as a supplier to the United Nations Development Programme?",
        answer: "UNDP is proud to be a partner in the United Nations Global Marketplace (UNGM). Suppliers are encouraged to visit the UNGM to register as a potential vendor. UNGM is used by 31 agencies, funds, and programmes in the UN System."
    },
    {
        question: "How can I find out whether my range of products or services is procured by UNDP?",
        answer: "Keep in mind that UNDP procurement is decentralized, meaning Country Offices and HQ Business Units undertake their own purchasing [see How We Buy]. Companies interested in doing business with the UNDP are encouraged to conduct their market research to find possible business opportunities for the range of products or services they offer. UNDP Country Offices have dedicated websites that provide information on ongoing projects and ongoing procurement actions. The UNDP Transparency Portal provides detailed information on UNDP activities."
    },
    {
        question: "Where can I find information on procurement opportunities?",
        answer: "UNDP advertises most of its procurement opportunities, and they can be accessed for free on its procurement notices website and on UNGM."
    },
    {
        question: "My company’s registration through UNGM has been approved by UNDP. How come I have never been invited to bid?",
        answer: "There may be many reasons, but the most common one is that the goods or services you are offering is only required sporadically. Successfully registering with UNGM does not guarantee business opportunities for your company. We encourage potential vendors to track their areas of interest and find out about current projects by visiting the UNDP website and consulting our procurement notices. Please consult the Doing Business with UNDP section for further guidance."
    },
    {
        question: "I heard there is a bid going on for 'XYZ' good or service. I want to participate. Who shall I contact?",
        answer: "Procurement notices always include a point of contact. You are encouraged to contact the respective procurement officers in the Country Office/Business Unit for information on procurement action related to the goods or services you offer. For general inquiries, you may contact Office of Procurement (OP)."
    },
    {
        question: "Are UNDP purchases tax/duty free?",
        answer: "As an inter-governmental organization, the UN is exempt from payment of taxes and duties for its purchases."
    },
    {
        question: "As a US firm, should my company quote based on GSA contracts?",
        answer: "UNDP seeks value for money. Your pricing does not need to be based on GSA contracts, but the federal government’s most favored customer pricing requirement would be a useful baseline when submitting financial offers."
    },
    {
        question: "How does UNDP pay suppliers?",
        answer: "UNDP payment terms are normally net 30 days upon receipt of invoice and delivery of goods or performance of contractual services, whichever is later. UNDP does not issue letters of credit."
    },
    {
        question: "Does UNDP require a performance guarantee?",
        answer: "UNDP may require a successful contractor to furnish performance bonds in the standard format or similar forms of guarantee. The amount of performance bonds/guarantees will vary depending on the nature of the requirements. For example, in case of construction contracts, UNDP calls for performance bonds and labor and material bonds in sums equal to the total contract price. The United Nations may also include a liquidated damages clause in its contractual documents in case adherence to the schedule of delivery of goods or performance of contractual services is critical in meeting the requirements of the UNDP."
    },
    {
        question: "As a non-U.S. based company, would I be advantaged if I appointed a U.S. company or agent to act on my behalf?",
        answer: "No. Presence in the United States results in absolutely no advantages, especially because UNDP is a decentralized agency. Depending on the goods/services you offer, you should contact the respective UNDP Country Office directly."
    },
    {
        question: "I will be on a business trip to New York and would like to meet procurement representatives from UNDP. Is that possible?",
        answer: "If you think that your product/service is of interest to UNDP HQ, you should contact your country representation at the UN and organize a meeting through them. Subject to availability, an Office of Procurement (OP) representative may try to meet you, but we encourage you to direct your marketing effort to Country Offices themselves."
    },
];

function FAQ() {
    return (
        <div className="ngo-portal">
            <Navbar />
            <div className="ngo-body">
                <Sidebar />
                <main className="ngo-main">
                    <div className="faq-container">
                        <h3>Frequently Asked Questions</h3>
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-card">
                                <p className="faq-question">{faq.question}</p>
                                <p className="faq-answer">{faq.answer}</p>
                            </div>
                        ))}
                        <p className="faq-more">
                            For more information, visit the{' '}
                            <a href="https://www.undp.org/lebanon/procurement" target="_blank" rel="noreferrer">
                                UNDP Lebanon Procurement
                            </a> page.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default FAQ;
