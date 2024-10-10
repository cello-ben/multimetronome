import { useEffect, useState } from 'react';
import PieceContext from '../context/PieceContext';
import PieceDropdown from './PieceDropdown';
import SectionDropdown from './SectionDropdown';

const fetchPieces = () => {
    //Placeholder before we implement a server:
    return [
        {
            "id": "334b27a9-5577-4ed4-af98-bf4ef00585ba",
            "title": "Starburst",
            "composer_first_name": "Jessie",
            "composer_last_name": "Montgomery",
            "sections": [
                {
                    "title": "Beginning",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 4,
                    "bars": 11
                },
                {
                    "title": "Measure 12",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 3,
                    "bars": 2
                },
                {
                    "title": "Measure 14",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 4,
                    "bars": 9
                },
                {
                    "title": "Measure 23",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 3,
                    "bars": 2
                },
                {
                    "title": "Measure 25",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 4,
                    "bars": 2
                },
                {
                    "title": "Measure 27",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 5,
                    "bars": 1
                },
                {
                    "title": "Measure 28",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 4,
                    "bars": 5
                },
                {
                    "title": "Measure 33",
                    "start_tempo": 114,
                    "end_tempo": 104,
                    "beats_per_bar": 4,
                    "bars": 1
                },
                {
                    "title": "Measure 34",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 4,
                    "bars": 1
                },
                {
                    "title": "Measure 35",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 2,
                    "bars": 1
                },
                {
                    "title": "Measure 36",
                    "start_tempo": 228,
                    "end_tempo": 228,
                    "beats_per_bar": 5,
                    "bars": 1
                },
                {
                    "title": "Measure 37",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 3,
                    "bars": 1
                },
                {
                    "title": "Measure 38",
                    "start_tempo": 228,
                    "end_tempo": 228,
                    "beats_per_bar": 3,
                    "bars": 1
                },
                {
                    "title": "Measure 39",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 2,
                    "bars": 1
                },
                {
                    "title": "Measure 40",
                    "start_tempo": 114,
                    "end_tempo": 114,
                    "beats_per_bar": 3,
                    "bars": 5
                }
            ]
        }
    ];
}

export default function PieceSelector(props) {
    const [pieces, setPieces] = useState([]);
    const [selected, setSelected] = useState(null);
    useEffect(() => {
        setPieces(fetchPieces);
    }, []);
    return (
        <PieceContext.Provider value = {{pieces, setPieces, selected, setSelected}}>
            <PieceDropdown />
            <SectionDropdown />
        </PieceContext.Provider>
    );
};