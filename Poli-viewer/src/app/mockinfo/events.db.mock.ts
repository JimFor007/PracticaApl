import { Event } from '../models/event.model'
export const ALL_EVENTS: Event[] = [
    {
        idEvent: 1,
        nombre: 'cybersecurity',
        duracion: 1,
        descripcion: 'Este es el evento de cybersecurity',
        virtual: false,
        creation_date: new Date(1/4/2020)
    },
    {
        idEvent: 2,
        nombre: 'Maratones de programación',
        duracion: 1,
        descripcion: 'Este es el evento de Maratones de programación',
        virtual: false,
        creation_date: new Date(9/4/2019)
    },
    {
        idEvent: 3,
        nombre: 'Competencia de integración',
        duracion: 1,
        descripcion: 'Este es el evento de Competencias de integración',
        virtual: false,
        creation_date: new Date(5/7/2019)
    }
];