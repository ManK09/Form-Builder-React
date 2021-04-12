import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from './Container'
import {useParams} from 'react-router-dom'

export default function CallingPage() {
    return (
        <div>
            <DndProvider backend={ HTML5Backend } >
                <Container/
            </DndProvider>
        </div>
    )
}
