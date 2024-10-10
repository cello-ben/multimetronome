import { useContext } from 'react';
import { Select } from '@chakra-ui/react';
import PieceContext from '../context/PieceContext';

export default function PieceDropdown(props) {
    const {pieces, setSelected} = useContext(PieceContext);
    return (
        <Select onChange = {(e) => setSelected(e.target.value.id)} placeholder = "Select a piece to get started.">
            {pieces.map(piece => <option key = {piece.id} value = {piece.id}>{piece.composer_last_name}, {piece.composer_first_name} - {piece.title}</option>)}
        </Select>
    );
};