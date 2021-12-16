import Listening from 'components/IELTS/Listening.jsx';
export function getModuleDetails() {
    return [
        { id: 'listening', body: <Listening />},
        { id: 'reading', body: <Listening />},
        { id: 'writing', body: <Listening />},
        { id: 'speaking', body: <Listening />},
    ]
}