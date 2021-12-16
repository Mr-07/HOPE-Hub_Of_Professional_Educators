import Patiala from 'images/Cities/Patiala.jpg';
import Amritsar from 'images/Cities/Amritsar.jpg';

export function getCentresData() {
    return [
        {id: 'punjab', header: 'Punjab', data: [...getPunjabData()]},
        {id: 'haryana', header: 'Haryana', data: [...getPunjabData()]}
    ]
}

function getPunjabData() {
    return [
        {id: 'patiala', name: 'Patiala', source: Patiala},
        {id: 'amritsar', name: 'Amritsar', source: Amritsar}
    ]
}