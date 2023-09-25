"use client"


import { fetchCars } from '@/Utils';
import { CarCard } from '@/components';
import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar';
import ShowMore from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { manufacturers } from '../constants/index';


export default  function Home() {
  const [allCars,setAllCars]=useState([]);
  const [loading, setLoading] = useState(false);
  // Search States
   const [manufacturer, setManufacturer] = useState("");
   const [model, setModel] = useState("");
  //  Filter States 
  const [fuel, setFuel] = useState("");
   const [year, setYear] = useState(2022);

// Pagination States

 const [limit, setLimit] = useState(10);

 const getCars=async ()=>{
  setLoading(true)

  try{
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);

  } catch(error) {
    console.log(error)

  } finally {
    setLoading(false)

  }
  
 
 }
useEffect (()=>{
getCars();

},[manufacturers,year,limit,model,fuel])



  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div
        className="padding-x padding-y mt-12 max-width
      "
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 flex-center w-full">
                <Image
                  src="/loader.svg"
                  width={50}
                  alt="loader"
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps,No Result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
