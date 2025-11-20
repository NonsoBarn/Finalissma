import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RemixIcon from "react-native-remix-icon";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BankingHomeScreen() {
  const menuItems = [
    {
      id: 1,
      icon: "wallet-3-fill",
      label: "Account\nand Card",
      color: "#5B4AE8",
    },
    { id: 2, icon: "swap-fill", label: "Transfer", color: "#FF4B8C" },
    {
      id: 3,
      icon: "money-dollar-circle-fill",
      label: "Withdraw",
      color: "#2B9BF4",
    },
    {
      id: 4,
      icon: "smartphone-fill",
      label: "Mobile\nprepaid",
      color: "#FFA726",
    },
    { id: 5, icon: "bill-fill", label: "Pay the\nbill", color: "#4CAF50" },
    { id: 6, icon: "coin-fill", label: "Save\nonline", color: "#5B4AE8" },
    { id: 7, icon: "bank-card-fill", label: "Credit\ncard", color: "#FF6B35" },
    {
      id: 8,
      icon: "file-list-3-fill",
      label: "Transaction\nreport",
      color: "#5B4AE8",
    },
    { id: 9, icon: "user-shared-fill", label: "Beneficiary", color: "#FF4B8C" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5B4AE8" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>PP</Text>
            </View>
            <Text style={styles.greeting}>Hi, Nonso Barn</Text>
          </View>
          <View style={styles.notificationContainer}>
            <RemixIcon name="notification-3-line" size={24} color="#FFF" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Card Section */}
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardHolder}>Nonso Barn</Text>

                <Text style={styles.cardType}>Amazon Platinium</Text>

                <View style={styles.cardNumberRow}>
                  <Text style={styles.cardNumber}>4756</Text>
                  <View style={styles.dots}>
                    {[...Array(8)].map((_, i) => (
                      <View key={i} style={styles.dot} />
                    ))}
                  </View>
                  <Text style={styles.cardNumber}>9018</Text>
                </View>

                <Text style={styles.balance}>$46,000.52</Text>
              </View>

              <View style={styles.cardBrand}>
                <Text style={styles.visaText}>VISA</Text>
              </View>

              {/* Decorative circles */}
              <View style={styles.circle1} />
              <View style={styles.circle2} />
            </View>
          </View>

          {/* Menu Grid */}
          <View style={styles.menuGrid}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                activeOpacity={0.7}
              >
                <View style={[styles.iconContainer]}>
                  <RemixIcon name={item.icon} size={32} color={item.color} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "",
    flex: 1,
    backgroundColor: "#4A3BC7",
  },
  header: {
    backgroundColor: "#4A3BC7",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#0303",
    fontSize: 16,
    fontWeight: "600",
  },
  greeting: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF4B8C",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "700",
  },
  content: {
    // flex: 1,
    backgroundColor: "#f5f5f5ff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
    position: "relative",
  },
  card: {
    backgroundColor: "#2A2473",
    borderRadius: 20,
    padding: 25,
    minHeight: 200,
    position: "relative",
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  cardContent: {
    zIndex: 2,
  },
  cardHolder: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30,
  },
  cardType: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 15,
    opacity: 0.9,
  },
  cardNumberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  cardNumber: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  dots: {
    flexDirection: "row",
    gap: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FFF",
  },
  balance: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
  },
  cardBrand: {
    position: "absolute",
    right: 25,
    top: "50%",
    marginTop: -20,
    zIndex: 3,
  },
  visaText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "italic",
  },
  circle1: {
    position: "absolute",
    right: -50,
    top: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#3D52D5",
    zIndex: 1,
  },
  circle2: {
    position: "absolute",
    right: -80,
    top: 30,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#2B9BF4",
    zIndex: 1,
  },

  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,

    justifyContent: "space-between",
  },
  menuItem: {
    width: "30%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  iconContainer: {
    // width: 60,
    // height: 60,
    // borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  menuLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    lineHeight: 16,
  },
});
