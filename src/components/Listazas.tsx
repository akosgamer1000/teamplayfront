import { useState, useEffect } from "react";
import Email from "../email.ts";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
export default function Listazas() {
    const [emails, setEmails] = useState<Email[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmails();
    }, [emails]);
    
    const fetchEmails = async () => {
        try {
            const response = await fetch('http://localhost:3000/email');
            const data = await response.json();
            setEmails(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching emails:', error);
            setLoading(false);
        }
    }
    const shortenSubject = (subject: string) => {
        return subject.length > 20 ? subject.substring(0, 20) + "..." : subject;
    }

    const shortenContent = (content: string) => {
        return content.length > 20 ? content.substring(0, 20) + "..." : content;
    }

    return <>
        <Menu />
        <table>
            <thead>
                <tr>
                    <th>Feladó</th>
                    <th>Címzett</th>
                    <th>Tárgy</th>
                    <th>Üzenet</th>
                    <th>Megtekintés</th>
                </tr>
            </thead>
            <tbody>
                {emails.map((email) => (
                    <tr key={email.id}>
                        <td>{email.sender}</td>
                        <td>{email.receiver}</td>
                        <td>{shortenSubject(email.subject)}</td>
                        <td>{shortenContent(email.content)}</td>
                        <td><button onClick={() => navigate("/viewEmail", { state: email })}>Megtekintés</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

