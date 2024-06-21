import Sidebar from "../components/Sidebar";

import { useTranslation } from 'react-i18next';


const Faq = () => {
    const { t } = useTranslation();

    return (
        <div className="faq_container">
            <h1>FAQ 🤔</h1>
            <div className="faq_question_container">
                <h2>1.</h2>
                <div className={`chat-message user`}>
                        <p>{t('faq.question1')}</p>
                </div>
                
            </div>
            <div className={`chat-message bot_faq`}>
                <p>{t('faq.answer1')}</p>
            </div>
            <div className="faq_question_container">
                <h2>2.</h2>
                <div className={`chat-message user`}>
                        <p>{t('faq.question2')}</p>
                </div>
            </div>
            <div className={`chat-message bot_faq`}>
                <p>{t('faq.answer2')}</p>
            </div>
            <div className="faq_question_container">
                <h2>3.</h2>
                <div className={`chat-message user`}>
                        <p>{t('faq.question3')}</p>
                </div>
            </div>
            <div className={`chat-message bot_faq`}>
                <p>{t('faq.answer3')}</p>
            </div>
            <div className="faq_question_container">
                <h2>4.</h2>
                <div className={`chat-message user`}>
                        <p>{t('faq.question4')}</p>
                </div>
            </div>
            <div className={`chat-message bot_faq`}>
                <p>{t('faq.answer4')}</p>
            </div>
            
        </div>
    );
}

export default Faq;

{/* <div className={`chat-message bot_faq`}>
    <p>It is absolutely cheaper to go with our AI therapist considering: <br></br>
    <li>24/7 access <br></br> </li>
    <li>No need to think about confidentiality of your data. You achieve safe space with us <br></br> </li>
    <li>Empathy and comfort provided by people who programmed the AI</li>
    </p>
</div> */}