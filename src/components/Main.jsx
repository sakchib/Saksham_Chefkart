import React, { useEffect, useState } from 'react'

const Card = ({ item }) => {
    return (
        <div className='w-full px-4 py-2 flex justify-between my-4 '>
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-start items-center space-x-4 font-semibold'>
                    <div>
                        {item.name}
                    </div>
                    <span className=''>
                        <div className='relative w-4 h-4 border-green-400 border-2 flex justify-center items-center'>
                            <div className='w-2 h-2 rounded-full bg-green-400  '> </div>
                        </div>
                    </span>
                    <div className='bg-green-400 rounded-lg text-white flex space-x-2 scale-75 px-2'>
                        <span>{item.rating}</span>
                        <img src='https://www.svgrepo.com/show/526669/star.svg' width={15} className='text-white' />
                    </div>
                </div>
                <div className='flex space-x-4 mt-2 '>
                    <div className='w-8 flex flex-col justify-center items-center'>
                        <img src="https://www.svgrepo.com/show/500673/refrigerator.svg" alt="" width={20} />
                        <span className='text-[8px]'>{item.equipments[0]}</span>
                    </div>
                    {item.equipments[1] && (<div className='w-8 flex flex-col justify-center items-center'>
                        <img src="https://www.svgrepo.com/show/500673/refrigerator.svg" alt="" width={20} />
                        <span className='text-[8px]'>{item.equipments[1]} </span>
                    </div>)}
                    <span className='w-[1px] h-8 bg-black'></span>
                    <div className='flex flex-col text-xs space-y-1'>
                        <span className='font-semibold'>Ingredients</span>
                        <span className='text-orange-400 font-semibold text-xs'>{`View List >`}</span>
                    </div>
                </div>
                <div className='text-gray-400 text-sm'>
                    {item.description}
                </div>
            </div>

            <div className='relative w-24 h-14'>
                <img src={item.image} className=' rounded-xl w-24 h-14' />
                <div className='absolute left-4 -bottom-2 bg-orange-50 border border-orange-500 text-sm px-4  rounded-md text-orange-500 shadow-md'>Add</div>

            </div>
        </div>
    )
}

const Main = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1');
                const json = await response.json();
                setData(json.dishes);
                console.log(json.dishes);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='relative'>
            <div className='min-h-screen my-10 p-4 max-w-md mx-auto border-2'>
                <div className='fixed min-h-[40vh] mx-auto bg-white   '>
                    <div className='relative bg-black h-12'>
                        <div className='bg-white absolute -bottom-8 rounded-xl font-semibold  w-[80%] left-[10%] px-10 flex justify-between items-center py-4 space-x-1 shadow-lg'>
                            <h2>21 May 2021</h2>
                            <span className='h-6 w-[1px] bg-black'></span>
                            <h2>10:30 Pm - 12:30 Pm</h2>
                        </div>
                    </div>
                    <div className='mt-14 flex space-x-4'>
                        <span className=' border rounded-full px-4 py-1 font-semibold border-orange-400 text-orange-400 '>
                            Indian
                        </span>
                        <span className=' border border-gray-400 text-gray-400 rounded-full px-4 py-1 font-semibold '>
                            Indian
                        </span>
                        <span className=' border border-gray-400 text-gray-400 rounded-full px-4 py-1 font-semibold '>
                            Indian
                        </span>
                        <span className=' border border-gray-400 text-gray-400 rounded-full px-4 py-1 font-semibold '>
                            Indian
                        </span>
                        <span className=' border border-gray-400 text-gray-400 rounded-full px-4 py-1 font-semibold '>
                            Indian
                        </span>
                    </div>

                    <div className='my-8 flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Popular Dishes</h3>
                        <div className='flex space-x-4'>
                            <div className='relative w-[4rem] h-[4rem] '>
                                <img src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg' width={64} className='rounded-full ' />
                                <span className='absolute inset-0 bg-black rounded-full opacity-50  z-10'></span>
                                <span className='absolute inset-0 top-6 left-3 font-semibold text-white text-xs z-30'>Biryani</span>

                            </div>

                            <div className='relative w-[4rem] h-[4rem] outline rounded-full outline-2 outline-orange-400 outline-offset-2' >
                                <img src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg' width={64} className='rounded-full ' />
                                <span className='absolute inset-0 bg-black rounded-full opacity-50  z-10'></span>
                                <span className='absolute inset-0 top-6 left-3 font-semibold text-white text-xs z-30'>Biryani</span>

                            </div>

                            <div className='relative w-[4rem] h-[4rem] outline rounded-full outline-2 outline-orange-400 outline-offset-2' >
                                <img src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg' width={64} className='rounded-full ' />
                                <span className='absolute inset-0 bg-black rounded-full opacity-50  z-10'></span>
                                <span className='absolute inset-0 top-6 left-3 font-semibold text-white text-xs z-30'>Biryani</span>

                            </div>

                            <div className='relative w-[4rem] h-[4rem] outline rounded-full outline-2 outline-orange-400 outline-offset-2' >
                                <img src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg' width={64} className='rounded-full ' />
                                <span className='absolute inset-0 bg-black rounded-full opacity-50  z-10'></span>
                                <span className='absolute inset-0 top-6 left-3 font-semibold text-white text-xs z-30'>Biryani</span>

                            </div>

                            <div className='relative w-[4rem] h-[4rem] outline rounded-full outline-2 outline-orange-400 outline-offset-2' >
                                <img src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg' width={64} className='rounded-full ' />
                                <span className='absolute inset-0 bg-black rounded-full opacity-50  z-10'></span>
                                <span className='absolute inset-0 top-6 left-3 font-semibold text-white text-xs z-30'>Biryani</span>

                            </div>


                            <div className='relative w-[4rem] h-[4rem] outline rounded-full outline-2 outline-orange-400 outline-offset-2' >
                                <img src='https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg' width={64} className='rounded-full ' />
                                <span className='absolute inset-0 bg-black rounded-full opacity-50  z-10'></span>
                                <span className='absolute inset-0 top-6 left-3 font-semibold text-white text-xs z-30'>Biryani</span>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='min-h-[40vh] '>

                </div>


                <div className='max-h-[60%] overflow-auto border-t-2 my-4 py-2'>
                    <div className='flex justify-between items-center'>
                        <div className='font-bold text-xl'>
                            Recommeded
                        </div>
                        <div className='font-bold bg-black text-white px-4 py-1 rounded-lg'>
                            Menu
                        </div>
                    </div>


                </div>

                {
                    data && data.map((item) => {
                        return (
                            <div>
                                <Card item={item} />
                            </div>
                        )
                    })
                }

            </div>
            <div className='absolute bg-black text-white  bottom-14 left-[50%] -translate-x-[50%] px-8 py-2 rounded-lg flex space-x-4 justify-center items-center'>
                <img src='https://www.svgrepo.com/show/289460/junk-food-burger.svg' width={25} />
                <div className='text-sm font-bold'>3 food items selected</div>
                <img src='https://www.svgrepo.com/show/492503/right-arrow.svg' width={25} />
            </div>
        </div>
    )
}

export default Main
