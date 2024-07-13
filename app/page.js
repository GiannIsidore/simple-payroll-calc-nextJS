"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [basicPay, setBasicPay] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeRate, setOvertimeRate] = useState(0);
  const [sss, setSss] = useState(0);
  const [pagibig, setPagibig] = useState(0);
  const [philhealth, setPhilhealth] = useState(0);
  const [netPay, setNetPay] = useState(0);
  const calculateOvertimePay = () => {
    return overtimeHours * overtimeRate;
  };
  const calculateNetPay = () => {
    const totalDeductions = sss + pagibig + philhealth;
    const pay = basicPay / 2;
    const grossPay = pay + calculateOvertimePay() - totalDeductions;
    setNetPay(grossPay);
  };
  const alertPayroll = () => {
    alert(`Net Pay: ₱${netPay}`);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-7 p-4">
      <Card className="w-full max-w-md bg-yellow-500 h-full ">
        <CardHeader>
          <CardTitle>Payroll Calculator</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="basicPay">Basic Pay</Label>
              <Input
                id="basicPay"
                type="number"
                value={basicPay}
                onChange={(e) => setBasicPay(parseFloat(e.target.value))}
              />
            </div>
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="overtimeHours">Overtime Hours</Label>
              <Input
                id="overtimeHours"
                type="number"
                value={overtimeHours}
                onChange={(e) => setOvertimeHours(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="overtimeRate">Overtime Rate</Label>
              <Input
                id="overtimeRate"
                type="number"
                value={overtimeRate}
                onChange={(e) => setOvertimeRate(parseFloat(e.target.value))}
              />
            </div>
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="sss">SSS</Label>
              <Input
                id="sss"
                type="number"
                value={sss}
                onChange={(e) => setSss(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="pagibig">Pag-IBIG</Label>
              <Input
                id="pagibig"
                type="number"
                value={pagibig}
                onChange={(e) => setPagibig(parseFloat(e.target.value))}
              />
            </div>
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="philhealth">PhilHealth</Label>
              <Input
                id="philhealth"
                type="number"
                value={philhealth}
                onChange={(e) => setPhilhealth(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label>Overtime Pay</Label>
              <div className="text-2xl font-bold">
                ₱{calculateOvertimePay().toFixed(2)}
              </div>
            </div>
            <div>
              <Label>Total Deduction</Label>
              <div className="text-2xl font-bold">
                ₱{sss + philhealth + philhealth}
              </div>
            </div>
            <div>
              <Label>Net Pay</Label>
              <div className="text-2xl font-bold">₱{netPay}</div>
            </div>
          </div>
          <Button className="w-full" onClick={calculateNetPay}>
            Calculate
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-md  gap-y-10 ">
        <CardHeader>
          <CardTitle>Payroll Receipt</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="basicPay">Basic Pay</Label>
              {/* <Input
                id="basicPay"
                type="number"
                value={basicPay}
                readOnly
                onChange={(e) => setBasicPay(parseFloat(e.target.value))}
              /> */}
              <label htmlFor="">{basicPay}</label>
            </div>
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="overtimeHours">Overtime Hours</Label>
              {/* <Input
                id="overtimeHours"
                type="number"
                value={overtimeHours}
                readOnly
                onChange={(e) => setOvertimeHours(parseFloat(e.target.value))}
              /> */}{" "}
              <label htmlFor="">{overtimeHours}</label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="overtimeRate">Overtime Rate</Label>
              {/* <Input
                id="overtimeRate"
                type="number"
                value={overtimeRate}
                readOnly
                onChange={(e) => setOvertimeRate(parseFloat(e.target.value))}
              /> */}
              <label htmlFor="">{overtimeRate}</label>
            </div>
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="sss">SSS</Label>
              {/* <Input
                id="sss"
                type="number"
                value={sss}
                readOnly
                onChange={(e) => setSss(parseFloat(e.target.value))}
              /> */}
              <label htmlFor="">{sss}</label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="pagibig">Pag-IBIG</Label>
              {/* <Input
                id="pagibig"
                type="number"
                value={pagibig}
                readOnly
                onChange={(e) => setPagibig(parseFloat(e.target.value))}
              /> */}
              <label htmlFor="">{pagibig}</label>
            </div>
            <div className="space-y-2 grid grid-cols-2 justify-center items-center">
              <Label htmlFor="philhealth">PhilHealth</Label>
              {/* <Input
                id="philhealth"
                type="number"
                value={philhealth}
                readOnly
                onChange={(e) => setPhilhealth(parseFloat(e.target.value))}
              /> */}
              <label htmlFor="">{philhealth}</label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label>Overtime Pay</Label>
              <div className="text-2xl font-bold">
                ₱{calculateOvertimePay().toFixed(2)}
              </div>
            </div>
            <div>
              <Label>Total Deduction</Label>
              <div className="text-2xl font-bold">
                ₱{sss + philhealth + philhealth}
              </div>
            </div>
            <div>
              <Label>Net Pay</Label>
              <div className="text-2xl font-bold">₱{netPay}</div>
            </div>
          </div>
          <Button className="w-full" onClick={alertPayroll}>
            Print
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
