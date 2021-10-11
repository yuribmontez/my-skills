import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])

  const handleAddSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldSkills => [...oldSkills, data])
  }

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldSkills => oldSkills.filter(
      skill => skill.id !== id
    ))
  }

  const handleClearSkills = () => {
    setMySkills([])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Yuri</Text>

      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button handleAddSkill={handleAddSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
        )}
      />

      <Button title='Clear' onPress={handleClearSkills} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
})
