import React from "react";
import questions from "./data.json" ;
import './Faqs.scss'

export default () => {    
    const listItems = questions.map((question) => {
        return (
            <div className="accordion-item" key={question.id}>
                <h2 className="accordion-header" id={`heading-${question.id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${question.id}`} aria-expanded="true" aria-controls={`collapse-${question.id}`}>
                        {question.question}
                    </button>
                </h2>
                <div id={`collapse-${question.id}`} className="accordion-collapse collapse" aria-labelledby={`heading-${question.id}`} data-bs-parent="#accordionFaqs">
                    <div className="accordion-body">
                        <p>{question.answer}</p>
                    </div>
                </div>
            </div>
        );
    });
    return listItems;
}