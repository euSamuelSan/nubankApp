import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import CreditCardCard from "./CreditCardCard";
import WalletCard from "./WalletCard";
import LoanCard from "./LoanCard";
import RewardsCard from "./RewardsCard";
import LifeInsuranceCard from "./LifeInsuranceCard";

export default function Body({ user, isInfoVisible }) {
    return (
        <ScrollView>
            <CreditCardCard user={user} isInfoVisible={isInfoVisible} />
            <WalletCard user={user} isInfoVisible={isInfoVisible} />
            <LoanCard user={user} isInfoVisible={isInfoVisible} />
            <RewardsCard />
            <LifeInsuranceCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
