import Header from '../components/header'
import Card from '../components/card'

const Home = ({entries}) => {


return (
    <>
        <Header />
        <div className='grid grid-cols-1 auto-rows-auto	gap-6 '>
            {entries.map((entry) => <Card key={entry.id} entry={entry}/>)}
        </div>
    </>
)

}

export default Home