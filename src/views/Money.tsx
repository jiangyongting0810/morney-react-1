import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };
    return (
        <MyLayout>
            {selected.tags.join(',')}
            {selected.note}
            {selected.category}
            {selected.amount}
            <TagsSection value={selected.tags}
                         onChange={(tags) => onChange({tags: tags})}/>
            <NoteSection value={selected.note}
                         onChange={(note) => onChange({note: note})}/>
            <CategorySection value={selected.category}
                         onChange={(category) => onChange({category: category})}/>
            <NumberPadSection value={selected.amount}
                         onChange={(amount) => onChange({amount: amount})}
                         onOK={() => {
                         }}/>
        </MyLayout>
    );
}

export default Money;