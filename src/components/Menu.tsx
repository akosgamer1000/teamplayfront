import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();
    return <nav> 
        <button onClick={() => navigate("/felvetel")}>Email felvétele</button>
        <button onClick={() => navigate("/listazas")}>Email listázása</button>
    </nav>
}