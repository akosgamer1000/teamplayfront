import { useState } from "react"

export default function Felvetel() {

    const [sender, setSender] = useState<string>("");
    const [receiver, setReceiver] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [error, setError] = useState<string[]>([]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError([]);

        const newEmail = {
            sender: sender,
            receiver: receiver,
            subject: subject,
            content: content
        };

        try {
            const response = await fetch('http://localhost:3000/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEmail),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData);

            }

            setSender('');
            setReceiver('');
            setSubject('');
            setContent('');
        } catch (err: any) {
            setError([err.message]);
        }
    };

    return <form onSubmit={handleSubmit}>
        <h1>E-mail felvétele</h1>

        <label htmlFor="sender">Feladó:</label>
        <input type="text" name="sender" value={sender} onChange={e => setSender(e.target.value)} required/>

        <label htmlFor="receiver">Címzett:</label>
        <input type="text" name="receiver" value={receiver} onChange={e => setReceiver(e.target.value)} required/>

        <label htmlFor="subject">Tárgy:</label>
        <input type="text" name="subject" value={subject} onChange={e => setSubject(e.target.value)} required/>

        <label htmlFor="content">Üzenet:</label>
        <textarea 
            name="content" 
            value={content} 
            onChange={e => setContent(e.target.value)}
            className="content"
            rows={4}
            cols={50}
            required
        />

        {error && error.map((e: string) => <p style={{ color: 'red' }}>{e}</p>)}
        {error.length === 0 && <p style={{ color: 'green' }}>Üzenet sikeresen elküldve</p>}
        
        <button type="submit">Küldés</button>


    </form>
}