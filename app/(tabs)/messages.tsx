import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RemixIcon from "react-native-remix-icon";

export default function MessagesScreen() {
  const messages = [
    {
      id: 1,
      title: "Bank of America",
      subtitle: "Bank of America : 256486 is the au...",
      icon: "bank-line",
      iconBg: "#5B4AE8",
      date: "Today",
    },
    {
      id: 2,
      title: "Account",
      subtitle: "Your account is limited. Please foll...",
      icon: "user-line",
      iconBg: "#FF4B8C",
      date: "12/10",
    },
    {
      id: 3,
      title: "Alert",
      subtitle: "Your statement is ready for you to...",
      icon: "file-text-line",
      iconBg: "#2B9BF4",
      date: "11/10",
    },
    {
      id: 4,
      title: "Paypal",
      subtitle: "Your account has been locked. Ple...",
      icon: "paypal-line",
      iconBg: "#FFA726",
      date: "10/11",
    },
    {
      id: 5,
      title: "Withdraw",
      subtitle: "Dear customer, 2987456 is your co...",
      icon: "bank-card-line",
      iconBg: "#4CAF50",
      date: "10/12",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <RemixIcon name="arrow-left-s-line" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Message</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Messages List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => (
          <TouchableOpacity
            key={message.id}
            style={[
              styles.messageItem,
              index === messages.length - 1 && styles.lastMessageItem,
            ]}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: message.iconBg },
              ]}
            >
              <RemixIcon name={message.icon} size={28} color="#FFF" />
            </View>

            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.messageTitle}>{message.title}</Text>
                <Text style={styles.messageDate}>{message.date}</Text>
              </View>
              <Text style={styles.messageSubtitle} numberOfLines={1}>
                {message.subtitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFF",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  placeholder: {
    width: 38,
  },
  content: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  lastMessageItem: {
    borderBottomWidth: 0,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  messageDate: {
    fontSize: 13,
    color: "#9E9E9E",
  },
  messageSubtitle: {
    fontSize: 14,
    color: "#9E9E9E",
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  navItem: {
    padding: 10,
    alignItems: "center",
  },
  navItemActive: {
    flex: 1,
    maxWidth: 150,
  },
  navButtonActive: {
    flexDirection: "row",
    backgroundColor: "#5B4AE8",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  navLabelActive: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
