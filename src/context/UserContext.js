import React, { useState } from "react";

export const UserContext = React.createContext({
    info: {
        name: "Samuel",
        email: "example@gmail.com",
        phoneNumber: "(31)96555-2323",
        monthlyIncome: 2000,
        appPassword: "somePassword",
    },
    prefs: {
        visibility: isInfoVisible,
        customAvailableLimit: 400.0,
    },
    bank: {
        creditCard: {
            active: true,
            invoiceClosed: false,
            totalLimit: 1800.0,
            actualInvoice: 0.0,
        },
        account: {
            balance: 543.97,
            agency: 1,
            accountNumber: 12234234,
            digit: 5,
        },
        loan: {
            active: false,
            available: true,
            preApprovedValue: 7700,
        },
    },
});

export default UserContextProvider = ({ children }) => {
    //info
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [monthlyIncome, setMonthlyIncome] = useState();
    const [appPassword, setAppPassword] = useState();

    //prefs
    const [visibility, setVisibility] = useState();
    const [customAvailableLimit, setCustomAvailableLimit] = useState();

    //bank
    //bank.creditCard
    const [invoiceClosed, setInvoiceClosed] = useState();
    //bank.account
    const [balance, setBalance] = useState();
};
