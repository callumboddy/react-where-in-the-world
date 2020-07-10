import React from 'react'

function Country({ country, allCountries, setSelectedCountry }) {
  return (
    <div>
      <div className="mt-16 overflow-hidden rounded-md shadow-xl">
        <img className="w-full object-cover" src={country.flag} alt="Country Flag"/>
      </div>

      <h2 className="mt-10 text-2xl font-bold" >{country.name}</h2>

      <ul className="mt-8 space-y-3">
        <li className="text-gray-900 text-sm"><span className="font-semibold">Native Name:</span> <span>{country.nativeName}</span></li>
        <li className="text-gray-900 text-sm"><span className="font-semibold">Population:</span> <span>{country.population}</span></li>
        <li className="text-gray-900 text-sm"><span className="font-semibold">Region:</span> <span>{country.region}</span></li>
        <li className="text-gray-900 text-sm"><span className="font-semibold">Sub Region:</span> <span>{country.subregion}</span></li>
        <li className="text-gray-900 text-sm"><span className="font-semibold">Capital:</span> <span>{country.capital}</span></li>
      </ul>

      <ul className="mt-8 space-y-3">
      <li className="text-gray-900 text-sm">
      <span className="font-semibold">Top Level Domain: </span> 
      { country.topLevelDomain.map((domain, index) => <span>{domain}{(index === country.topLevelDomain.length ? ", " : "")} </span>) }
      </li>
      <li className="text-gray-900 text-sm">
      <span className="font-semibold">Languages: </span> 
      { country.currencies.map((currency, index) => <span>{currency.name}{(index === country.currencies.length ? ", " : "")} </span>) }
      </li>
      <li className="text-gray-900 text-sm">
      <span className="font-semibold">Languages: </span> 
      { country.languages.map((language, index) => <span>{language.name}{(index < country.languages.length-1 ? ", " : "")} </span>) }
      </li>
      </ul>
      {country.borders.length > 0 && 
        <h2 className="mt-10 text-2xl font-bold" >Border Countries:</h2>

      }
      <div className="flex flex-wrap mt-4 pb-10">
      {country.borders.map(border => {
        const country = allCountries.filter(country => country.alpha3Code === border)[0] 
        return (
            <button className="px-6 py-2 mr-2 mb-2 flex items-center bg-white shadow-lg rounded-sm"
            onClick={() => setSelectedCountry(country)}>
            <p className="text-xs font-light text-gray-900">{country.name}</p>
            </button>
        )
      })}
      </div>
    </div>
  )
}

export default Country