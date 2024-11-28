
import { useLocation } from 'react-router-dom';
import Email from '../email';

const ViewEmail = () => {
    const { sender, receiver, subject, content } = useLocation().state as Email;
  return (
    <table className='viewEmail'>
        <tr>
            <td className='sender'>Feladó</td>
            <td>{sender}</td>
        </tr>
        <tr>
            <td className='receiver'>Címzett</td>
            <td>{receiver}</td>
        </tr>
        <tr>
            <td className='subject'>Tárgy</td>
            <td>{subject}</td>
        </tr>
        <tr>
            <td className='content'>Üzenet</td>
            <td>{content}</td>
        </tr>
    </table>
  );
};

export default ViewEmail;