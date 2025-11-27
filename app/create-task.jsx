import { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/Button'
import InputText from '../components/InputText'
import CustomText from '../components/Text'

const Create_task = () => {
  const categories = ['Work', 'Personal', 'Shopping']
  const [taskName, setTaskName] = useState('buyaa groceries')
  const [category, setCategory] = useState(categories[0])
  const [date, setDate] = useState('05 April, Tuesday')
  const [startTIme, setStartTime] = useState('09:00 AM')
  const [endTime, setEndTime] = useState('11:00 AM')
  const [Description, setDescription] = useState('')

  return (
    <ScrollView style={styles.container}>
      <View>
        <CustomText style={styles.label}>Task Name</CustomText>
        <InputText 
          style={styles.input} 
          placeholder='Task Name' 
          value={taskName}
          onChangeText={setTaskName}
          />
        <CustomText style={styles.label}>Category</CustomText>
        <View style={styles.categoryRow}>
        {categories.map((cat) => (
          <TouchableOpacity 
            key={cat} 
            style={[
              styles.categoryBtn, 
              category===cat && styles.categoryBtnActive]} 
            onPress={()=> setCategory(cat)}>
            <CustomText 
              style={[
                styles.categoryText,
                category===cat && styles.categoryTextActive]}>
              {cat}
                </CustomText>
          </TouchableOpacity>
        ))}
        </View>

        <View>
          <CustomText style={styles.label}>Date</CustomText>
          <InputText
            style={styles.input}
            placeholder={date}
            value={date}
            onChangeText={setDate}
          />
        </View>

        {/* hold the outer container in row*/}
        <View style={styles.timeRow}>

          {/* hold the outer container in column for start*/}
          <View style={{width: '48%'}}>
            <CustomText style={styles.label}>Start Time</CustomText>
            <InputText
              style={styles.input}
              placeholder={startTIme}
              value={startTIme}
              onChangeText={setStartTime}
            />
          </View>

          {/* hold the outer container in column for end*/}
          <View style={{width: '48%'}}>
            <CustomText style={styles.label}>End Time</CustomText>
            <InputText
              style={styles.input}
              placeholder={endTime}
              value={endTime}
              onChangeText={setEndTime}
            />
          </View>
        </View>

        <View>
          <CustomText style={styles.label}>Description</CustomText>
          <InputText
            style={[styles.input, {paddingVertical: 30, alignItemss: 'flex-start'}]}
            placeholder='Description'
            value={Description}
            onChangeText={setDescription}
          />
        </View>

      </View>
      <CustomButton style={styles.createBtn} title='Create Task'/>
    </ScrollView>

  )
}

export default Create_task

const styles = StyleSheet.create({
    container: {
    padding: 24,
    backgroundColor: "#f7faff"
  },

  label: {
    fontSize: 15,
    color: "#333",
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e3e6ee",
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
  },
  categoryRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  categoryBtn: {
    backgroundColor: "#e3e6ee",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 10,
  },
  categoryBtnActive: {
    backgroundColor: "#2563eb",
  },
  categoryText: {
    color: "#333",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#fff",
  },
  timeRow: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 8,
    gap: 10,
  },
  createBtn: {
    marginTop: 32,
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
  }
})