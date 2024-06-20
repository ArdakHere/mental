import { useTranslation } from 'react-i18next';


const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div className="contacts_container">
            <h1>{t('contacts')} 📩</h1>
          
            <div className={`chat-message bot`}>
                <p>{t('business_inquiries')}<br></br> <br></br>
                email1@gmail.com <br></br>
                email2@gmail.com
                </p>
            </div>
            
        </div>
    );
}

export default Contacts;