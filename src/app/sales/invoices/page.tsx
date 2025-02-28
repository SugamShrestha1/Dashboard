"use client";

import { useState } from "react";
import { CalendarIcon, PlusCircle, ShoppingCart, UserPlus } from "lucide-react";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import { Calendar } from "@/app/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/ui/popover";
import { format } from "date-fns";

const InvoiceForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [customer, setCustomer] = useState<string>("");
  const [customers, setCustomers] = useState<string[]>(["Sugam Shrestha",]);
  const [invoiceNumber, setInvoiceNumber] = useState<number>(1);
  const [showAddCustomer, setShowAddCustomer] = useState<boolean>(false);
  const [newCustomer, setNewCustomer] = useState<string>("");

  // Function to add a new customer
  const handleAddCustomer = () => {
    if (newCustomer.trim() !== "") {
      setCustomers([...customers, newCustomer]);
      setCustomer(newCustomer);
      setNewCustomer("");
      setShowAddCustomer(false);
    }
  };

  return (
    <div className="mx-6 mt-2 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">New Invoice</h2>

    
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="font-semibold">Company</p>
      </div>

     
      <div className="grid grid-cols-2 gap-4 mb-4">
      
        <div className="relative">
          <Label className="block mb-2">Customer</Label>
          <Input
            type="text"
            placeholder="Type a Customer name"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-full border p-2 rounded-md"
          />
          <div className="absolute w-full bg-white shadow-md mt-1 rounded-md">
            {customers.filter(c => c.toLowerCase().includes(customer.toLowerCase())).length > 0 ? (
              customers
                .filter(c => c.toLowerCase().includes(customer.toLowerCase()))
                .map((c, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setCustomer(c)}
                  >
                    {c}
                  </div>
                ))
            ) : (
              <div className="p-2 text-gray-500">No data</div>
            )}
            <div className="p-2 text-blue-500 cursor-pointer border-t flex items-center" onClick={() => setShowAddCustomer(true)}>
              <UserPlus className="mr-2" size={18} /> + Add New
            </div>
          </div>
        </div>

       
        {showAddCustomer && (
          <div className="absolute bg-white shadow-md p-4 border rounded-md w-80 mt-2">
            <h3 className="text-lg font-semibold mb-2">Add New Customer</h3>
            <Input type="text" placeholder="Enter customer name" value={newCustomer} onChange={(e) => setNewCustomer(e.target.value)} className="mb-2" />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowAddCustomer(false)}>Cancel</Button>
              <Button onClick={handleAddCustomer}>Save</Button>
            </div>
          </div>
        )}

        
        <div>
          <Label>Invoice Number</Label>
          <Input type="text" value={`INV-000${invoiceNumber}`} readOnly className="border p-2 rounded-md bg-gray-100" />
        </div>
      </div>

   
      <div className="grid grid-cols-2 gap-4 mb-4">
      
        <div>
          <Label>Invoice Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                {selectedDate ? format(selectedDate, "dd MMM yyyy") : "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Due Date */}
        <div>
          <Label>Due Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                {dueDate ? format(dueDate, "dd MMM yyyy") : "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar mode="single" selected={dueDate} onSelect={setDueDate} />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Order Number */}
      <div className="mb-4">
        <Label>Order Number</Label>
        <div className="flex items-center border p-2 rounded-md">
          <ShoppingCart className="mr-2 text-gray-500" />
          <Input type="text" placeholder="Enter Order Number" className="border-none outline-none flex-1" />
        </div>
      </div>

      {/* Items Section */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold">Items</h3>
        <Button variant="outline" className="w-full mt-2">
          <PlusCircle className="mr-2" /> Add an Item
        </Button>
      </div>

      {/* Total Section */}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between">
          <p className="font-semibold">Subtotal</p>
          <p>Rs0.00</p>
        </div>
        <div className="text-blue-500 cursor-pointer">Add Discount</div>
        <div className="flex justify-between mt-2">
          <p className="font-semibold">Total</p>
          <div className="flex items-center space-x-2">
            <span>NRs Rupees</span>
            <p>Rs0.00</p>
          </div>
        </div>
      </div>

      {/* Generate Invoice Button */}
      <div className="mt-6 flex justify-end">
        <Button onClick={() => setInvoiceNumber(invoiceNumber + 1)}>Generate Invoice</Button>
      </div>
    </div>
  );
};

export default InvoiceForm;
