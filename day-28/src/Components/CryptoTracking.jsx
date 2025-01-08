import React, { useEffect, useState } from 'react'

const CryptoTracking = () => {

    const [cryptoData, setCryptoData] = useState([]);
    const [filteredCryptoList, setFilteredCryptoList] = useState([]);
    const [search, setSearch] = useState('');
    const cryptoCurrency = async () => {

        try {
            const response = await fetch("https://openapiv1.coinstats.app/coins",
                { headers: { 'X-API-KEY': "QzwPzfJE+U8vFwTnri0wSS0N8WTQ7yk599btyA2dJCI=" } })
            const data = await response.json();
            setCryptoData(data.result);
            setFilteredCryptoList(data.result);

        } catch (error) {
            console.log(error);
        }
    }
    console.log('fil cryptoData', filteredCryptoList);

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        cryptoCurrency()
    }, [])

    useEffect(() => {
        const updatedList = cryptoData.filter((value) => value.name.toLowerCase().includes(search.toLowerCase())
        )
        console.log('update', search.toLowerCase())
        setFilteredCryptoList(updatedList)
    }, [search])

    return (
        <div className="container text-center mt-4">
            <div className='crypto-content '>
                <h1>Cryptocurrency</h1>
                <input type="text" placeholder='Search here' className='px-3 p-1 rounded-3 border-2' onKeyUp={handleInput} />
            </div>
            <div className='table-responsive-lg '>
                <table className="table caption-top mt-3 table-bordered border-dark">
                    <thead className='bg-secondary'>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Price</th>
                            <th scope="col">Availbale Supply</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default CryptoTracking
