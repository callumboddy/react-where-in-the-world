import React from 'react'

function CountryList({ countries, setSelectedCountry, setScrollOffset }) {
  
  const formattedNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
  <div className="mx-10 grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {countries.map(country => {
        return (
            <div 
              className="w-full overflow-hidden rounded-lg shadow-lg bg-white"
              onClick={() => {
                setScrollOffset(window.scrollY)
                setSelectedCountry(country)
              }}
              >
              <div className="bg-white">
                <img className="h-full w-full object-cover" src={country.flag} alt="Country flag" />
              </div>
              <div className="p-6">
              <h2 className="text-lg font-bold" >{country.name}</h2>
              <ul className="mt-4 space-y-1">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Population:</span> <span className="font-light">{formattedNumber(country.population)}</span></li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Region:</span> <span className="font-light">{country.region}</span></li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Capital:</span> <span className="font-light">{country.capital}</span></li>
              </ul>
              </div>
            </div>
          )
        })
      }
      </div>)
}

export default CountryList