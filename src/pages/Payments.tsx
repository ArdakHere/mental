import { useTranslation } from 'react-i18next';


const Payments = () => {
    const { t } = useTranslation();

    return (
        <div className="contacts_container">
            <h1>{t('payments')} 💵</h1>
          
            <div className={`chat-message bot`}>
                <p> Pay us lotta money
                </p>
            </div>
            
        </div>
    );
}

export default Payments;