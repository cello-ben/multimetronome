import { useContext } from 'react';
import { Select } from '@chakra-ui/react';
import PieceContext from '../context/PieceContext';

export default function SectionDropdown() {
    const { selected } = useContext(PieceContext);
    return (
        <></>
    );
};
