import React from 'react';
import Image from 'next/image';
import money from '../img/money.jpg'
import { Card, CardContent } from "../ui/card";

const Inventory = () => {
    return (
        <div className="flex flex-col items-center space-y-8 mt-4">

            
            <div className="flex w-full justify-between space-x-8">

                
                <div className="w-full md:w-1/2">
                    <h1 className="font-semibold text-2xl">Cash Inventory Management Software for Banks</h1>
                    <p className="mt-4">
                        C3 Financial, logicpath’s cash ordering and forecasting software, simplifies the cash supply chain for banks and credit unions by integrating all cash point devices seamlessly - ensuring your needs for cash are met at the lowest cost, everywhere you need them. Our algorithm and analytics enable you to leverage globally used inventory management techniques to predict demand and uncertainty through cash forecasting and optimization, right down to the precise denomination levels in each location… all with a click of a button.
                    </p>
                    <button className='rounded-full bg-gradient-to-r from-blue-200 to-blue-600 text-white p-4 mt-8'>
                        Contact Sales
                    </button>
                </div>

        
                <div className="w-full md:w-1/2">
                    <Image src={money} alt='moneyismoney' layout="responsive" className='rounded-lg' />
                </div>
            </div>

            
            <div className="flex flex-col-2 space-x-8 mx-16">

                
                <div className="w-1/2">
                    <p className="font-semibold text-xl mb-4">The Smarter Way to Manage Cash</p>
                    <Card>
                        <CardContent className='rounded-lg bg-slate-200'>
                            <p className="font-semibold">Cash Operations Efficiency</p>
                            <p>Applies inventory management principles that improve overall operational efficiency, reducing time spent on cash operations processes for cash agents and executives by 80%</p>
                        </CardContent>
                    </Card>
                </div>

                
                <div className="w-1/2 mt-10 ">
                    <Card>
                        <CardContent className='rounded-lg bg-slate-200'>
                            <p className="font-semibold">Cash Operations Efficiency</p>
                            <p>Applies inventory management principles that improve overall operational efficiency, reducing time spent on cash operations processes for cash agents and executives by 80%</p>
                        </CardContent>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default Inventory;
