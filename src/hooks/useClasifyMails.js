import {useState, useEffect} from 'react'
import { getChatGPTResponse } from '../lib/gptApi';

const useClasifyMails = (Mails) => {
    const [classifiedMails, setClassifiedMails] = useState([]);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const classifyMails = async () => {
        const classified = await Promise.all(
            Mails.map(async (mail) => {
            mail.category = await getChatGPTResponse(`Basándote en el asunto del siguiente correo electrónico,
                                                     clasifica el correo electrónico en una de las siguientes categorías:
                                                     Urgente, Negocios, Familiar, Comercial y Recordatorios.
                                                     Ten en cuenta que la respuesta debe ser únicamente la categoría. ${mail.subject}`);
            return mail
        })
        );
        setClassifiedMails(classified);
        };
        setIsFirstRender(false);
        if (!isFirstRender) {
            classifyMails();
        }
    },[isFirstRender]);

    return classifiedMails;
}

export default useClasifyMails