import Sidebar from "../components/Sidebar";


const Faq = () => {
    return (
        <div className="faq_container">
            <h1>FAQ 🤔</h1>
            <div className="faq_question_container">
                <h2>1.</h2>
                <div className={`chat-message user`}>
                        <p>Do you collect my data? I am concerned about privacy.</p>
                </div>
                
            </div>
            <div className={`chat-message bot_faq`}>
                <p>NO, under no circumstances. Our technology itself is unable to store any data programatically</p>
            </div>
            <div className="faq_question_container">
                <h2>2.</h2>
                <div className={`chat-message user`}>
                        <p>Do you guarantee that the your AI therapist will help me?</p>
                </div>
            </div>
            <div className={`chat-message bot_faq`}>
                <p>Unfortunetaly, we can't guarantee this. However, it will make sure to ask the right questions <br></br> 
                and make sure you feel heard and understood</p>
            </div>
            <div className="faq_question_container">
                <h2>3.</h2>
                <div className={`chat-message user`}>
                        <p>Does your AI therapist recommends medications?</p>
                </div>
            </div>
            <div className={`chat-message bot_faq`}>
                <p>Yes, our AI therapist may recommend medications, but only mild ones, as stronger ones <br></br> 
                would require the consultation of a licensed healthcare professional</p>
            </div>
            <div className="faq_question_container">
                <h2>3.</h2>
                <div className={`chat-message user`}>
                        <p>Is it cheaper for me to use your AI therapist or go to an actual therapist?</p>
                </div>
            </div>
            <div className={`chat-message bot_faq`}>
                <p>Yes, our AI therapist may recommend medications, but only mild ones, as stronger ones <br></br> 
                would require the consultation of a licensed healthcare professional</p>
            </div>
        </div>
    );
}

export default Faq;