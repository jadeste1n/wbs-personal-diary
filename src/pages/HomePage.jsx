import Header from '../components/header'
import Card from '../components/card'
import originalEntries from '../data/diaryEntries';
import { useState, useEffect } from 'react'

const Home = () => {

    const [entries, setEntries] = useState(originalEntries); //initial array for entries



    return (
        <>
            <Header />
            <div className='grid grid-cols-1 auto-rows-auto	gap-6 '>
                {entries.map((entry) => <Card key={entry.id} entry={entry} />)}
            </div>
        </>
    )

}

export default Home