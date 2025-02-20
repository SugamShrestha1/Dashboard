"use client";

import {  Banknote, ShoppingCart, Heart } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Chart from "../chart/chart";

const Dashboardcard = () => {
    return (
        <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-6">
                    <CardContent>
                        <h3 className="text-2xl text-center font-bold">Total Income</h3>
                        <h2 className="text-4xl font-semibold text-center">Rs 300,000</h2>
                        <div className="flex justify-center items-center mt-4">
                            <Banknote className="text-white opacity-80" size={64} />
                        </div>
                    </CardContent>
                </Card>

            
                <Card className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl shadow-lg p-6">
                    <CardContent>
                        <h3 className="text-2xl text-center font-bold">Total Expenses</h3>
                        <h2 className="text-4xl font-semibold text-center">Rs 20,000</h2>
                        <div className="flex justify-center items-center mt-4">
                            <ShoppingCart className="text-white opacity-80" size={64} />
                        </div>
                    </CardContent>
                </Card>

                
                <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl shadow-lg p-6">
                    <CardContent>
                        <h3 className="text-2xl text-center font-bold">Total Profit</h3>
                        <h2 className="text-4xl font-semibold text-center">Rs 280,000</h2>
                        <div className="flex justify-center items-center mt-4">
                            <Heart className="text-white opacity-80" size={64} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            
            <div className="mt-6">
                <Chart />
            </div>
        </div>
    );
};

export default Dashboardcard;
