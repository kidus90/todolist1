import { useRouter } from "expo-router";

import { FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useState, useEffect } from "react";
import { Notification01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import CustomButton from '../components/Button';
import CustomInputText from "../components/InputText";
import CustomText from '../components/Text';
import CustomCard from '../components/Card'

let taskStore = [
  {
    id: "1",
    title: "UI Design",
    time: "09:00 AM - 11:00 AM",
    category: "personal",
    description: "Designing UI for the new app.",
  },
  {
    id: "2",
    title: "Web Development",
    time: "11:30 AM - 12:30 PM",
    category: "work",
    description: "Developing the company website.",
  },
  {
    id: "3",
    title: "Office Meeting",
    time: "02:00 PM - 03:00 PM",
    category: "Work",
    description: "Monthly team meeting.",
  },
  {
    id: "4",
    title: "Shopping",
    time: "03:30 PM - 05:00 PM",
    category: "shopping",
    description: "Buy groceries and supplies.",
  },
];


export default function Index() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(true);
  const categories=['All', 'Personal', 'Work', 'Shopping']
  const [search, setSearch] = useState("");

  const [tasks, setTasks]= useState([]);
  useEffect(()=> {
    setTasks([...taskStore]);
  },[]);

  const filteredTasks =
  selectedCategory === "All"
    ? tasks
    : tasks.filter(
      (t) => t.category.toLowerCase() === selectedCategory.toLowerCase()
    );


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
              value={search}
              onChangeText={setSearch}
              style={styles.searchText}
              />
        </View>
      </View>
      <View style={styles.progrescard2}>

        <View style={styles.taskHeaderRow}>
          <CustomText>All Activity</CustomText>
            <TouchableOpacity>
              <CustomText style={styles.seeAll}>See More</CustomText>
            </TouchableOpacity>
        </View>

        <View style={styles.filterBar}>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=> item}
            renderItem ={({item}) => (
              <TouchableOpacity
                style={[
                  styles.filterChip,
                  selectedCategory === item && styles.filterChipSelected,
                ]}
                onPress={()=> setSelectedCategory(item)}
                activeOpacity={0.7}>
               <CustomText
               style={[
                styles.filterChipText,
                selectedCategory === item && styles.filterChipTextSelected 
                

               ]}
               >{item}</CustomText>
              </TouchableOpacity>
            )}
          contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 8}}
          />
        </View>

      </View>
          <FlatList
            data={filteredTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskItemTouchable}
              >
                <CustomCard style={styles.taskCard}>
                  <View style={styles.taskContentColumn}>
                    <View style={styles.taskTitleRow}>
                      <CustomText style={styles.taskTitle}>
                        {item.title}
                      </CustomText>
                    </View>
                    <CustomText style={styles.taskCategory}>
                      {item.category}
                    </CustomText>
                  </View>
                  <CustomText style={styles.taskTime}>{item.time}</CustomText>
                </CustomCard>
                <CustomText style={styles.descriptionText}>
                  {item.description}
                </CustomText>
              </TouchableOpacity>
            )}
          />

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
    marginTop: 8,
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
    marginTop: -14,
    marginBottom: 16,
    textAlign: "center",

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
    paddingVertical: 6,
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
    right: 12,
    bottom: 52,
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
  taskItemTouchable: {
    marginBottom: 12,
  },
  taskContentColumn: {
    flexDirection: "column",
    flex: 1,
  },
  descriptionText: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },
  iconRight: {
    marginLeft: 8,
  },
});
