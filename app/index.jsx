import { useRouter } from "expo-router";

import { StyleSheet, View } from 'react-native';

import { Notification01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import CustomButton from '../components/Button';
import CustomInputText from "../components/InputText";
import CustomText from '../components/Text';



export default function Index() {
  const router = useRouter();

  // const [search, setSearch] = react.useState("")
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topRow}>
          
            <View style={styles.iconCircle}>
              <HugeiconsIcon icon={Notification01Icon} size={22} color="#000" />
            </View>
          </View>

          <CustomText style={styles.greeting} > You are dead Eyoal ☠️ </CustomText>

          <View style={styles.searchBar}>
            <HugeiconsIcon icon={Search01Icon} size={20} color="#b0b0b0" style={{marginRight: 8}} />
            <CustomInputText
              placeholder="Search task"
              // value={search}
              // onChangeText={setSearch}
              style={styles.searchText}
              />
        </View>
      </View>
      <CustomButton
        title="+"
        onPress={() => router.push("/create-task")}
        style={styles.fab}
        textStyle={styles.fabPlus}
      />
    </View>
  )
}




const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#f7faff",
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  topSection: {
    backgroundColor: "#2563eb",
    paddingTop: 20,
    paddingBottom: 32,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",

    marginBottom: 18,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },

  greeting: {
    fontSize: 22,
    marginBottom: 18,
    textAlign: "center",
    color: "#ffffffff"
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    paddingHorizontal: 18,
    height: 48,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    gap: 10,
    marginTop: -10,
    marginBottom: 20,
  },
  searchText: {
    color: "#6b7280",
    fontSize: 16,
    flex: 1,
    paddingVertical: 0,
    paddingLeft: 0,
  },
  progrescard2: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: -40,
    backgroundColor: "#f7faff",
    paddingTop: 24,
  },
  taskHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  taskHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  seeAll: {
    color: "#2563eb",
    fontWeight: "500",
    fontSize: 14,
  },
  filterBar: {
    flexDirection: "row",
    marginBottom: 8,
    marginTop: 2,
  },
  filterChip: {
    backgroundColor: "#f5f5f5ff",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 2,
  },
  filterChipSelected: {
    backgroundColor: "#2563eb",
  },
  filterChipText: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "500",
  },
  filterChipTextSelected: {
    color: "#fff",
    fontWeight: "700",
  },
  taskList: {
    flex: 1,
    minHeight: 400,
    maxHeight: 750,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    minHeight: 90,
  },
  taskTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  taskCategory: {
    color: "#2563eb",
    fontSize: 13,
    marginLeft: 10,
    fontWeight: "500",
    marginTop: 2,
  },
  taskTime: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },
  fab: {
    position: "absolute",
    right: 32,
    bottom: 32,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2563eb",
    shadowColor: "#2563eb",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  fabPlus: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: -12,
    marginLeft: -3,
  },
});
