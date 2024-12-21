import Header from "../components/header";
import Card from "../components/card";
import originalEntries from "../data/diaryEntries";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Home = ({ id = null }) => {
    //set State
    const [entries, setEntries] = useState(originalEntries); //initial array for entries
    const [displayEntry, setDisplayEntry] = useState(undefined); //initial array for entries

    // Sync entries to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
        if (id) {
            setDisplayEntry(entries.find((item) => item.id === id))
        }
    }, [entries]);

    return (
        <>
            <Header />

            <div className="grid grid-cols-1 auto-rows-auto	gap-6 ">
                {entries.map((entry) => (
                    <Card key={entry.id} entry={entry} />
                ))}
            </div>

            <Modal setEntries={setEntries} DiaryEntry={displayEntry} />
        </>
    );
};

export default Home;
