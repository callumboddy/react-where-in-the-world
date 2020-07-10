import React, { useState, useEffect } from 'react';
import { FiMoon } from 'react-icons/fi'
import { IoMdMoon, IoIosArrowRoundBack }  from 'react-icons/io'
import CountryDetail from './components/CountryDetail'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => {
      setCountries(data)
    })
  }, [])

  useEffect(() => {
    if (selectedCountry === null) {
      window.scrollTo(0, scrollOffset)
    } else {
      window.scrollTo(0, 0)
    }
  }, [selectedCountry, scrollOffset])


  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="fixed top-0 w-full px-6 py-6 flex items-center justify-between bg-white shadow">
        <h1 className="text-md font-bold">Where in the world?</h1>
        <div className="px-4 py-2 -mx-2  flex hover:bg-gray-300 rounded-lg">
          <FiMoon className="mr-2 h-5"/>
          <span className="text-xs">Dark Mode</span>
        </div>
      </header>
      <main className="mx-6 py-32">
      {selectedCountry &&
          <React.Fragment>
            <BackButton onClick={() => setSelectedCountry(null) }/>
            <CountryDetail country={selectedCountry} allCountries={countries} setSelectedCountry={setSelectedCountry}/>
          </React.Fragment>
      } 
      {!selectedCountry && 
        <CountryList countries={countries} setSelectedCountry={setSelectedCountry} setScrollOffset={setScrollOffset} />
      } 
      </main>
    </div>
  );
}

export default App;

function BackButton({ onClick }) {
  return (
  <button className="px-4 py-1 flex items-center bg-white shadow-lg rounded-sm"
  onClick={onClick}>
    <IoIosArrowRoundBack size="32"/>
    <p className="pr-2 font-light text-gray-900">Back</p>
  </button>
  )
}