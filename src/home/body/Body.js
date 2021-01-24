import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import CreditCardCard from "./CreditCardCard";
import WalletCard from "./WalletCard";
import LoanCard from "./LoanCard";
import RewardsCard from "./RewardsCard";
import LifeInsuranceCard from "./LifeInsuranceCard";

export default function Body({ user, isVisibe }) {
    return (
        <ScrollView>
            <CreditCardCard user={user} isVisibe={isVisibe} />
            <WalletCard user={user} isVisibe={isVisibe} />
            <LoanCard user={user} isVisibe={isVisibe} />
            <RewardsCard />
            <LifeInsuranceCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
